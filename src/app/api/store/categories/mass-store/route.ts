import { NextRequest, NextResponse } from 'next/server'

// import { formDataToJson } from '@utils/formDataToJson'
import { Category } from '@prisma/client'
import { prisma } from '@services/prisma'
import { CategoryFormProps } from 'Types/Category'
import { getObjectProps, noEmpty } from '~/utils'
import {
  categoryIncludeFactory,
  setCategoryDefaultProps
} from '~/utils/category'

type PostRequestBody = {
  categories: Array<CategoryFormProps>
}

/**
 * Create categories from the mass creation form
 *
 * @param request
 *
 * Data Structure
 * request body:
 */
export const POST = async (request: NextRequest) => {
  // const formData = await request.formData()
  // const requestBody = formDataToJson<PostRequestBody>(formData)

  const requestBody = (await request.json()) as PostRequestBody

  const categoriesData = requestBody.categories.map(category => {
    // const slag = generateSlagByTitle(category.title)
    const categoryData = getObjectProps(category, [
      'id',
      'description',
      'icon',
      'parentId',
      'title'
    ])

    // if (empty(categoryData.icon)) {
    //   categoryData.icon = 'category-icon-placeholder.jpg'
    // }

    return {
      ...setCategoryDefaultProps(categoryData as Category)
    }
  })

  // console.log({ categoriesData })

  try {
    const categories = await prisma.$transaction(
      categoriesData.map(({ parentId, ...categoryData }) =>
        prisma.category.upsert({
          create: {
            ...categoryData,

            parent: !noEmpty(parentId)
              ? undefined
              : {
                  connect: {
                    slag: String(parentId)
                  }
                }
          },
          update: getObjectProps(categoryData, [
            'description',
            'icon',
            'title'
          ]),
          where: {
            slag: categoryData.slag
          },
          include: categoryIncludeFactory()
        })
      )
    )

    if (categories instanceof Array) {
      return NextResponse.json(categories)
    }
  } catch (err) {
    console.log('\n\n\n\n\n\nError => ', err)
  }

  // const categories = await prisma.category.create({
  //   data: {
  //     title: '',
  //     description: '',
  //     slag: '',
  //     icon: '',

  //     categories: {
  //       createMany: {
  //         data: [
  //           {
  //             title: '',
  //             description: '',
  //             slag: '',
  //           }
  //         ]
  //       }
  //     }
  //   }
  // })

  return Response.json(
    {
      message: 'Error while request'
    },
    {
      status: 400
    }
  )
}
