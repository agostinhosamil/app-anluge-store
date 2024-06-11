import { Product } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@services/prisma'
import { NextApiProps } from 'Types/next'
import { getObjectProps } from '~/utils'
import { formDataToJson } from '~/utils/formDataToJson'
import { generateSlagByTitle } from '~/utils/generateSlagByTitle'
import { productIncludeFactory, setProductDefaultProps } from '~/utils/product'

type Params = {
  id: string
}

type PatchRequestBodyProps = {
  product: Product & {
    tags: Array<string>
    medias: Array<string>
  }
}

export const GET = async (
  request: NextRequest,
  { params }: NextApiProps<Params>
) => {
  const include = productIncludeFactory()

  const product = await prisma.product.findFirst({
    include,

    where: {
      OR: [
        {
          id: params.id
        }
      ]
    }
  })

  if (product) {
    return NextResponse.json(product)
  }

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

export const DELETE = async (
  request: NextRequest,
  { params }: NextApiProps<Params>
) => {
  const product = await prisma.product.delete({
    where: {
      id: params.id,

      OR: [
        {
          id: params.id
        }
      ]
    }
  })

  if (product) {
    return NextResponse.json({
      success: true,
      message: 'Product successfully deleted'
    })
  }

  return NextResponse.json(
    {
      success: false,
      status: 'error',
      error: 'not found',
      message: 'product not found'
    },
    {
      status: 404
    }
  )
}

export const PATCH = async (
  request: NextRequest,
  { params }: NextApiProps<Params>
) => {
  const formData = await request.formData()
  const requestBody = formDataToJson<PatchRequestBodyProps>(formData)

  console.log({ requestBody })

  const productData = getObjectProps(requestBody.product, [
    'name',
    'summary',
    'description',
    'price',
    'categoryId',
    'barCode',
    'sku',
    'stock',
    'type',
    'code'
  ])

  const include = productIncludeFactory()

  requestBody.product.tags =
    requestBody.product.tags instanceof Array ? requestBody.product.tags : []
  requestBody.product.medias =
    requestBody.product.medias instanceof Array &&
    requestBody.product.medias.length >= 1
      ? requestBody.product.medias
      : []

  const productTags = requestBody.product.tags.map(title => {
    const slag = generateSlagByTitle(title).replace(/(\-[0-9]+)$/, '')

    return {
      title,
      slag
    }
  })

  try {
    const product = await prisma.product.update({
      include,
      data: {
        ...setProductDefaultProps(productData),

        tags: {
          connectOrCreate: productTags.map(tag => ({
            where: {
              slag: tag.slag,

              OR: [
                {
                  id: tag.slag
                },
                {
                  slag: tag.slag
                }
              ]
            },

            create: {
              ...tag
            }
          }))
        },

        medias: {
          createMany: {
            data: requestBody.product.medias.map(fileName => ({
              fileName
            }))
          }
        }
      },

      where: {
        id: params.id
      }
    })

    console.log('Updated => ', { product })

    if (product) {
      return NextResponse.json(product)
    }
  } catch (err) {
    console.log('\n\n\n\n\nFound Error => ', err, '\n\n\n\n\n')
    // TODO: handle this
    // pass
  }

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
