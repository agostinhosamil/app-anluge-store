import { NextResponse } from 'next/server'
import { z } from 'zod'

import { prisma } from '@services/prisma'
import { NextApiHandler } from 'Types/next'
import { noEmpty } from '~/utils'
import { getRequestBody } from '~/utils/server/getRequestBody'

type Params = {
  id: string
}

export const GET: NextApiHandler<Params> = async (request, { params }) => {
  const id = String(params.id)

  const product = await prisma.product.findUnique({
    where: {
      id
    },

    include: {
      properties: true
    }
  })

  if (!product) {
    return NextResponse.json(
      {
        status: 'error',
        error: 'not found',
        message: 'product not found'
      },
      {
        status: 404
      }
    )
  }

  return NextResponse.json(product.properties)
}

const PostRequestBodySchema = z.object({
  properties: z
    .array(
      z
        .object({
          key: z.string().min(1),
          value: z.string().min(1).nullish(),

          properties: z
            .array(
              z.object({
                key: z.string().min(1),
                value: z.string()
                // productId: z.string().min(15)
              })
            )
            .min(1)
            .nullish()
        })
        .refine(property => {
          if (!(property.properties instanceof Array)) {
            return noEmpty(property.value)
          }

          return property.properties.length >= 1
        })
    )
    .min(1)
})

type PostRequestBody = z.infer<typeof PostRequestBodySchema>

export const POST: NextApiHandler<Params> = async (request, { params }) => {
  const id = String(params.id)

  const requestBody = await getRequestBody<PostRequestBody>(request)
  const validatedRequestBody = PostRequestBodySchema.safeParse(requestBody)

  const product = await prisma.product.findUnique({
    select: {
      id: true
    },
    where: {
      id
    }
  })

  if (!(validatedRequestBody.data && product)) {
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

  const { properties } = validatedRequestBody.data

  try {
    const createdProperties = await prisma.$transaction([
      ...properties.map(property =>
        prisma.property.deleteMany({
          where: {
            productId: id,
            key: property.key
          }
        })
      ),

      ...properties.map(({ key, value, properties }) =>
        prisma.property.create({
          data: {
            key,
            value,
            productId: id,

            properties: {
              createMany: {
                data: (properties ?? []).map(({ key, value }) => ({
                  key,
                  value
                }))
              }
            }
          }
        })
      )
    ])

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
    console.log('>>>> Error: ', err, '\n\n\n\n\n')
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
