import { Product } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@services/prisma'
import { NextApiProps } from 'Types/next'
import { getObjectProps } from '~/utils'
import { formDataToJson } from '~/utils/formDataToJson'
import { productIncludeFactory, setProductDefaultProps } from '~/utils/product'

type Params = {
  id: string
}

type PatchRequestBodyProps = {
  product: Product
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

  const product = await prisma.product.update({
    data: setProductDefaultProps(productData),

    where: {
      id: params.id
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
