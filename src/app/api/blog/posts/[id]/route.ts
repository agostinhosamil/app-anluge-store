import { NextResponse } from 'next/server'
import { z } from 'zod'

import { prisma } from '@services/prisma'
import { auth } from '@utils/auth'
import { SignInResponse } from '@utils/auth/types'
import { generateSlagByTitle } from '@utils/generateSlagByTitle'
import { handler } from '@utils/next'
import { getRequestBody } from '@utils/server/getRequestBody'
import { mediaList, tagList } from '@utils/zod'
import { capitalize } from '~/utils'

type Params = {
  id: string
}

export const GET = handler<Params>(async (request, { params }) => {
  const { id } = params

  const post = await prisma.post.findUnique({
    where: {
      id
    },

    include: {
      author: true,
      medias: true,
      tags: {
        select: {
          slag: true,
          title: true
        }
      }
    }
  })

  if (!post) {
    return NextResponse.json(
      {
        error: 'not-found',
        message: 'post does not exist'
      },
      {
        status: 404
      }
    )
  }

  return NextResponse.json(post)
})

export const DELETE = handler<Params>(
  'auth:jwt',
  async (request, { params }) => {
    const { id } = params

    try {
      await prisma.post.delete({
        where: {
          id
        }
      })

      return NextResponse.json({
        status: 'success',
        message: 'Post successfully deleted'
      })
    } catch (err) {
      // pass
    }

    return NextResponse.json(
      {
        error: 'not-found',
        message: 'post does not exist'
      },
      {
        status: 404
      }
    )
  }
)

const PatchRequestDataObjectSchema = z.object({
  post: z.object({
    title: z
      .string()
      .min(5)
      .transform(title => capitalize(title)),
    body: z
      .string()
      .min(10)
      .transform(body => encodeURIComponent(body)),
    tags: tagList(),
    medias: mediaList()
  })
})

type PatchRequestDataObject = z.infer<typeof PatchRequestDataObjectSchema>

export const PATCH = handler<Params>(
  'auth:jwt',
  async (request, { params }) => {
    const { id } = params
    const requestBody = await getRequestBody<PatchRequestDataObject>(request)

    const validatedRequestBody =
      await PatchRequestDataObjectSchema.safeParseAsync(requestBody)

    if (validatedRequestBody.error) {
      return NextResponse.json(
        {
          error: true,
          success: false,
          message: 'Invalid request input'
        },
        {
          status: 400,
          statusText: 'Invalid Request Input'
        }
      )
    }

    const signInData = (await auth()) as SignInResponse
    const authenticatedUser = signInData.user

    const { body, medias, tags, title } = validatedRequestBody.data.post

    const slag = generateSlagByTitle(title)

    try {
      const post = await prisma.post.update({
        data: {
          body,
          title,
          slag,

          medias: {
            createMany: {
              data: medias
            }
          },

          tags: {
            connectOrCreate: tags.map(tag => ({
              where: {
                slag: tag.slag
              },

              create: tag
            }))
          }
        },

        where: {
          id,
          userId: authenticatedUser.id
        }
      })

      return NextResponse.json(post, {
        status: 201
      })
    } catch (err) {
      // pass
    }

    return NextResponse.json(
      {
        status: 'error',
        error: 'not-created',
        message: 'Could not create post'
      },
      {
        status: 500
      }
    )
  }
)
