import { NextResponse } from 'next/server'
import { z } from 'zod'

import { prisma } from '~/services/prisma'
import { NextApiHandler } from '~/Types/next'
import { getRequestBody } from '~/utils/server/getRequestBody'

const PostRequestBodySchema = z.object({
  properties: z
    .array(
      z.object({
        key: z.string().min(1),
        value: z.string().nullish(),
        // productId: z.string().min(15),
        properties: z
          .array(
            z.object({
              key: z.string().min(1),
              value: z.string()
              // productId: z.string().min(15)
            })
          )
          .nullish()
      })
    )
    .min(1)
})

type PostRequestBody = z.infer<typeof PostRequestBodySchema>

type Params = {
  id: string
}

export const POST: NextApiHandler<Params> = async (request, { params }) => {
  const requestBody = await getRequestBody<PostRequestBody>(request)

  const validatedRequestBody = PostRequestBodySchema.safeParse(requestBody)

  const productId = params.id

  console.log({ productId })

  if (!validatedRequestBody.data) {
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
    const { properties } = validatedRequestBody.data

    const createdProperties = await prisma.$transaction(
      properties.map(property =>
        prisma.property.create({
          data: {
            productId,
            key: property.key,
            value: property.value,
            properties: {
              createMany: {
                data: !(property.properties instanceof Array)
                  ? []
                  : property.properties.map(prop => ({
                      productId,
                      key: prop.key,
                      value: prop.value
                    }))
              }
            }
          }
        })
      )
    )

    if (createdProperties) {
      return NextResponse.json({
        error: false,
        success: true,
        message: 'Properties successfully created for products'
      })
    }
  } catch (err) {
    // console.log('\n\n\n\n\n\n\nError: ', err, '\n\n\n\n\n\n\n\n\n')
    /**
     * TODO: Handle this
     */
    // pass
  }

  return NextResponse.json(
    {
      error: true,
      success: false,
      message: 'Could not create properties for products'
    },
    {
      status: 500,
      statusText: 'Could not create properties for products'
    }
  )
}
