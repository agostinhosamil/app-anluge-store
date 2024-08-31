import { NextResponse } from 'next/server'
import { z } from 'zod'

import { prisma } from '@services/prisma'
import { generateSlagByTitleWithoutSignature } from '@utils/generateSlagByTitle'
import { imageRef } from '@utils/images/isValidImageRef'
import { getRequestBody } from '@utils/server/getRequestBody'
import { NextApiHandler } from 'Types/next'
import { getSearchParamsQueryArgument } from '~/utils'
import { handler } from '~/utils/next'

export const GET: NextApiHandler = async request => {
  const queryString = request.nextUrl.searchParams
  const productsQueryArguments = getSearchParamsQueryArgument(queryString)
  const projects = await prisma.project.findMany(productsQueryArguments)

  return NextResponse.json(projects)
}

const PostRequestDataObjectSchema = z.object({
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

type PostRequestDataObject = z.infer<typeof PostRequestDataObjectSchema>

export const POST = handler<NextApiHandler>('auth:jwt', async request => {
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

  try {
    const project = await prisma.project.create({
      data: validatedRequestBody.data.project
    })

    return NextResponse.json(project)
  } catch (err) {
    return NextResponse.json({
      status: 'error',
      error: 'not-created',
      message: 'Service could not be created'
    })
  }
})
