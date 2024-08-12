import { NextResponse } from 'next/server'
import { z } from 'zod'

import { prisma } from '@services/prisma'
import { getRequestBody } from '@utils/server/getRequestBody'
import { NextApiHandler } from 'Types/next'
import { generateSlagByTitleWithoutSignature } from '~/utils/generateSlagByTitle'

type Params = {
  id: string
}

export const GET: NextApiHandler<Params> = async (request, { params }) => {
  const { id } = params
  const service = await prisma.service.findUnique({
    where: {
      id
    }
  })

  if (!service) {
    return NextResponse.json(
      {
        error: 'not-found',
        message: 'service does not exist'
      },
      {
        status: 404
      }
    )
  }

  return NextResponse.json(service)
}

const PatchRequestDataObjectSchema = z.object({
  service: z.object({
    title: z.string().min(3),
    description: z.string().min(10)
  })
})

type PatchRequestDataObject = z.infer<typeof PatchRequestDataObjectSchema>

export const PATCH: NextApiHandler<Params> = async (request, { params }) => {
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
    const { description, title } = validatedRequestBody.data.service
    const slag = generateSlagByTitleWithoutSignature(title)

    const service = await prisma.service.update({
      data: {
        description,
        title,
        slag
      },
      where: {
        id
      }
    })

    return NextResponse.json(service)
  } catch (err) {
    return NextResponse.json(
      {
        status: 'error',
        error: 'not-found',
        message: 'service does not exist'
      },
      {
        status: 404
      }
    )
  }
}

export const DELETE: NextApiHandler<Params> = async (request, { params }) => {
  const { id } = params

  try {
    const deleted = await prisma.service.delete({
      where: {
        id
      }
    })

    if (deleted) {
      return NextResponse.json({
        status: 'success',
        message: 'service successfully deleted'
      })
    }
  } catch (err) {
    // pass
  }

  return NextResponse.json(
    {
      status: 'error',
      error: 'not-deleted',
      message: 'service could not be deleted'
    },
    {
      status: 400
    }
  )
}
