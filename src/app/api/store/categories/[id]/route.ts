import { Category } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@services/prisma'
import { NextApiProps } from 'Types/next'
import { getObjectProps } from '~/utils'
import {
  categoryIncludeFactory,
  setCategoryDefaultProps
} from '~/utils/category'
import { formDataToJson } from '~/utils/formDataToJson'

type Params = {
  id: string
}

type PatchRequestBodyProps = {
  category: Category
}

export const GET = async (
  request: NextRequest,
  { params }: NextApiProps<Params>
) => {
  const include = categoryIncludeFactory()

  const category = await prisma.category.findFirst({
    include,

    where: {
      OR: [
        {
          id: params.id
        },
        {
          slag: params.id
        }
      ]
    }
  })

  if (category) {
    return NextResponse.json(category)
  }

  return NextResponse.json(
    {
      status: 'error',
      error: 'not found',
      message: 'category not found'
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
  const category = await prisma.category.delete({
    where: {
      id: params.id,

      OR: [
        {
          slag: params.id
        },
        {
          id: params.id
        }
      ]
    }
  })

  if (category) {
    return NextResponse.json({
      success: true,
      message: 'Category successfully deleted'
    })
  }

  return NextResponse.json(
    {
      success: false,
      status: 'error',
      error: 'not found',
      message: 'category not found'
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

  const categoryData = getObjectProps(requestBody.category, [
    'icon',
    'banner',
    'title',
    'description'
  ])

  try {
    const category = await prisma.category.update({
      data: setCategoryDefaultProps(categoryData),

      where: {
        id: params.id
      }
    })

    if (category) {
      return NextResponse.json(category)
    }
  } catch (err) {
    console.log('>>> Prisma Error: ', err)
  }

  return NextResponse.json(
    {
      status: 'error',
      error: 'not found',
      message: 'category not found'
    },
    {
      status: 404
    }
  )
}
