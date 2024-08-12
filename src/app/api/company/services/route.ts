import { NextResponse } from 'next/server'
import { z } from 'zod'

import { prisma } from '@services/prisma'
import { getRequestBody } from '@utils/server/getRequestBody'
import { NextApiHandler } from 'Types/next'
import { getSearchParamsQueryArgument } from '~/utils'
import { generateSlagByTitleWithoutSignature } from '~/utils/generateSlagByTitle'

export const GET: NextApiHandler = async request => {
  const queryString = request.nextUrl.searchParams
  const productsQueryArguments = getSearchParamsQueryArgument(queryString)
  const services = await prisma.service.findMany(productsQueryArguments)

  return NextResponse.json(services)
}

const PostRequestDataObjectSchema = z.object({
  service: z.object({
    title: z.string().min(3),
    description: z.string().min(10)
  })
})

type PostRequestDataObject = z.infer<typeof PostRequestDataObjectSchema>

export const POST: NextApiHandler = async request => {
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

  const { description, title } = validatedRequestBody.data.service
  const slag = generateSlagByTitleWithoutSignature(title)

  try {
    const service = await prisma.service.create({
      data: {
        description,
        title,
        slag
      }
    })

    return NextResponse.json(service)
  } catch (err) {
    return NextResponse.json({
      status: 'error',
      error: 'not-created',
      message: 'Service could not be created'
    })
  }
}
