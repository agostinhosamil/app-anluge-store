import { NextResponse } from 'next/server'
import { z } from 'zod'

import { prisma } from '@services/prisma'
import { getRequestBody } from '@utils/server/getRequestBody'
import { NextApiHandler } from 'Types/next'
import { generateSlagByTitleWithoutSignature } from '~/utils/generateSlagByTitle'
import { imageRef } from '~/utils/images/isValidImageRef'
import { handler } from '~/utils/next'

type Params = {
  id: string
}

export const GET: NextApiHandler<Params> = async (request, { params }) => {
  const { id } = params
  const project = await prisma.project.findUnique({
    where: {
      id
    }
  })

  if (!project) {
    return NextResponse.json(
      {
        error: 'not-found',
        message: 'project does not exist'
      },
      {
        status: 404
      }
    )
  }

  return NextResponse.json(project)
}

const PatchRequestDataObjectSchema = z.object({
  project: z
    .object({
      title: z.string().min(3),
      description: z.string().min(10),
      segment: z.string().min(3),
      image: imageRef().optional()
    })
    .transform(project => {
      const slag = generateSlagByTitleWithoutSignature(project.title)

      return {
        ...project,
        slag
      }
    })
})

type PatchRequestDataObject = z.infer<typeof PatchRequestDataObjectSchema>

export const PATCH = handler<NextApiHandler<Params>>(
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

    try {
      const project = await prisma.project.update({
        data: validatedRequestBody.data.project,
        where: {
          id
        }
      })

      return NextResponse.json(project)
    } catch (err) {
      return NextResponse.json(
        {
          status: 'error',
          error: 'not-found',
          message: 'project does not exist'
        },
        {
          status: 404
        }
      )
    }
  }
)

export const DELETE = handler<NextApiHandler<Params>>(
  'auth:jwt',
  async (request, { params }) => {
    const { id } = params

    try {
      const deleted = await prisma.project.delete({
        where: {
          id
        }
      })

      if (deleted) {
        return NextResponse.json({
          status: 'success',
          message: 'project successfully deleted'
        })
      }
    } catch (err) {
      // pass
    }

    return NextResponse.json(
      {
        status: 'error',
        error: 'not-deleted',
        message: 'project could not be deleted'
      },
      {
        status: 400
      }
    )
  }
)
