import { NextRequest, NextResponse } from 'next/server'

// import { formDataToJson } from '@utils/formDataToJson'
import { Product } from '@prisma/client'
import { prisma } from '@services/prisma'
import { getObjectProps } from '~/utils'
import { productIncludeFactory, setProductDefaultProps } from '~/utils/product'

type PostRequestBody = {
  products: Array<Product>
}

/**
 * Create products from the mass creation form
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

  const productsData = requestBody.products.map(product => {
    // const slag = generateSlagByTitle(product.title)
    const productData = getObjectProps(product, [
      'barCode',
      'categoryId',
      'code',
      'description',
      'name',
      'price',
      'sku',
      'stock',
      'summary',
      'type'
    ])

    // if (empty(productData.icon)) {
    //   productData.icon = 'product-icon-placeholder.jpg'
    // }

    return {
      ...setProductDefaultProps(productData as Product)
    }
  })

  // console.log({ productsData })

  try {
    const products = await prisma.$transaction(
      productsData.map(productData =>
        prisma.product.upsert({
          create: productData,
          update: getObjectProps(productData, ['name']),
          where: {
            code: String(productData.code)
          },
          include: productIncludeFactory()
        })
      )
    )

    if (products instanceof Array) {
      return NextResponse.json(products)
    }
  } catch (err) {
    console.log('\n\n\n\n\n\nError => ', err)
  }

  // const products = await prisma.product.create({
  //   data: {
  //     title: '',
  //     description: '',
  //     slag: '',
  //     icon: '',

  //     products: {
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
