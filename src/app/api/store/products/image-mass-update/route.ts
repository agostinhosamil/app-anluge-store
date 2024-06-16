import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

import { prisma } from '@services/prisma'
import { noEmpty } from '~/utils'
import { productIncludeFactory } from '~/utils/product'
import { getRequestBody } from '~/utils/server/getRequestBody'

const ProductImageMassUpdateRequestBodySchema = z.object({
  products: z.array(
    z.object({
      product: z.object({
        code: z.string().min(1)
      }),

      medias: z.array(
        z.object({
          fileName: z.string().refine(fileName => {
            const re = /^(([0-9]+)\/([0-9]+))$/
            return re.test(fileName)
          })
        })
      )
    })
  )
})

type ProductImageMassUpdateRequestBody = z.infer<
  typeof ProductImageMassUpdateRequestBodySchema
>

export const POST = async (request: NextRequest) => {
  const requestBody =
    await getRequestBody<ProductImageMassUpdateRequestBody>(request)

  const products = await prisma.product.findMany({
    where: {
      code: {
        in: requestBody.products.map(({ product }) => product.code)
      }
    }
  })

  const existingProductsCodes = products
    .filter(product => Boolean(product.code))
    .map(product => product.code)

  if (ProductImageMassUpdateRequestBodySchema.safeParse(requestBody)) {
    const updatedProducts = await prisma.$transaction(
      requestBody.products
        .filter(({ product }) =>
          Boolean(
            noEmpty(product.code) &&
              existingProductsCodes.includes(product.code)
          )
        )
        .map(({ product, medias }) => {
          console.log('product code => ' + product.code)
          return prisma.product.update({
            where: {
              code: product.code
            },

            data: {
              medias: {
                createMany: {
                  data: medias.map(({ fileName }) => ({
                    fileName
                  }))
                }
              }
            },

            include: productIncludeFactory()
          })
        })
    )

    return NextResponse.json(updatedProducts, {
      status: 200,
      headers: {
        'Updated-Records-Length': String(updatedProducts.length)
      }
    })
  }

  return NextResponse.json(
    {
      error: 'invalid-input'
    },
    {
      status: 400
    }
  )
}
