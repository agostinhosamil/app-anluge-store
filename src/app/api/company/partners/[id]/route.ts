import { NextResponse } from 'next/server'
import { z } from 'zod'

import { prisma } from '@services/prisma'
import { imageRef } from '@utils/images/isValidImageRef'
import { getRequestBody } from '@utils/server/getRequestBody'
import { NextApiHandler } from 'Types/next'

type Params = {
  id: string
}

export const GET: NextApiHandler<Params> = async (request, { params }) => {
  const { id } = params
  const partner = await prisma.partner.findUnique({
    where: {
      id
    }
  })

  if (!partner) {
    return NextResponse.json(
      {
        error: 'not-found',
        message: 'Partner does not exist'
      },
      {
        status: 404
      }
    )
  }

  return NextResponse.json(partner)
}

const PatchRequestDataObjectSchema = z.object({
  partner: z.object({
    name: z.string().min(1),
    logo: imageRef().nullish(),
    site: z.string().url().nullish()
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
    const partner = await prisma.partner.update({
      data: validatedRequestBody.data.partner,
      where: {
        id
      }
    })

    return NextResponse.json(partner)
  } catch (err) {
    return NextResponse.json(
      {
        status: 'error',
        error: 'not-found',
        message: 'Partner does not exist'
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
    const deleted = await prisma.partner.delete({
      where: {
        id
      }
    })

    if (deleted) {
      return NextResponse.json({
        status: 'success',
        message: 'Partner successfully deleted'
      })
    }
  } catch (err) {
    // pass
  }

  return NextResponse.json({
    status: 'error',
    error: 'not-deleted',
    message: 'Partner could not be deleted'
  })
}
