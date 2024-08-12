import { NextResponse } from 'next/server'
import { z } from 'zod'

import { prisma } from '@services/prisma'
import { imageRef } from '@utils/images/isValidImageRef'
import { getRequestBody } from '@utils/server/getRequestBody'
import { NextApiHandler } from 'Types/next'
import { getSearchParamsQueryArgument } from '~/utils'

export const GET: NextApiHandler = async request => {
  const queryString = request.nextUrl.searchParams
  const productsQueryArguments = getSearchParamsQueryArgument(queryString)
  const partners = await prisma.partner.findMany(productsQueryArguments)

  return NextResponse.json(partners)
}

const PostRequestDataObjectSchema = z.object({
  partner: z.object({
    name: z.string().min(1),
    logo: imageRef().nullish(),
    site: z.string().url().nullish()
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

  const partner = await prisma.partner.create({
    data: validatedRequestBody.data.partner
  })

  return NextResponse.json(partner)
}
