import { Category, Prisma } from '@prisma/client'
import { NextRequest } from 'next/server'

import { prisma } from '@services/prisma'
import {
  categoryIncludeFactory,
  setCategoryDefaultProps
} from '@utils/category'
import { formDataToJson } from '@utils/formDataToJson'
import { getObjectProps } from '~/utils'

type PostRequestBodyProps = {
  category: Category
}

export async function GET() {
  const include = categoryIncludeFactory()

  const categories = await prisma.category.findMany({
    include
  })

  return Response.json(categories)
}

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const requestBody = formDataToJson<PostRequestBodyProps>(formData)

  const categoryProps = getObjectProps<Category>(requestBody.category, [
    'icon',
    'title',
    'description'
  ])

  const include = categoryIncludeFactory()

  // categoryProps.slag = generateSlagByTitle(categoryProps.title)

  // if (empty(categoryProps.icon)) {
  //   categoryProps.icon = 'category-icon-placeholder.jpg'
  // }

  try {
    const category = await prisma.category.create({
      data: setCategoryDefaultProps(categoryProps),
      include
    })

    return Response.json(category)
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(err)
    }

    return Response.json(
      { message: 'Error while request' },
      {
        status: 400
      }
    )
  }
}
