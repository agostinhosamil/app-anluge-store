import { z } from 'zod'

import { NextResponse } from 'next/server'

import { prisma } from '@services/prisma'
import { handler } from '@utils/next'
import { mediaList, tagList } from '@utils/zod'
import { NextApiHandler } from 'Types/next'
import { capitalize, getSearchParamsQueryArgument } from '~/utils'
import { auth } from '~/utils/auth'
import { SignInResponse } from '~/utils/auth/types'
import { generateSlagByTitle } from '~/utils/generateSlagByTitle'
import { getRequestBody } from '~/utils/server/getRequestBody'

export const GET = handler<NextApiHandler>('auth:jwt', async request => {
  const queryString = request.nextUrl.searchParams
  const productsQueryArguments = getSearchParamsQueryArgument(queryString)
  const posts = await prisma.post.findMany(productsQueryArguments)

  return NextResponse.json(posts)
})

const PostRequestDataObjectSchema = z.object({
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

type PostRequestDataObject = z.infer<typeof PostRequestDataObjectSchema>

export const POST = handler('auth:jwt', async request => {
  const requestBody = await getRequestBody<PostRequestDataObject>(request)

  const validatedRequestBody =
    await PostRequestDataObjectSchema.safeParseAsync(requestBody)

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
    const post = await prisma.post.create({
      data: {
        body,
        title,
        slag,

        author: {
          connect: {
            id: authenticatedUser.id
          }
        },

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
})
