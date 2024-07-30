import { Prisma, Product } from '@prisma/client'
import { NextRequest } from 'next/server'

import { prisma } from '@services/prisma'
import { formDataToJson } from '@utils/formDataToJson'
import { productIncludeFactory, setProductDefaultProps } from '@utils/product'
import { getObjectProps, getSearchParamsQueryArgument } from '~/utils'
import { generateSlagByTitle } from '~/utils/generateSlagByTitle'

type PostRequestBodyProps = {
  product: Product & {
    tags: Array<string>
    medias: Array<string>
  }
}

export const maxDuration = 60

export async function GET(request: NextRequest) {
  const queryString = request.nextUrl.searchParams
  const productsQueryArguments = getSearchParamsQueryArgument(queryString)

  const include = productIncludeFactory()

  try {
    const products = await prisma.product.findMany({
      include,
      ...productsQueryArguments
    })

    return Response.json(products)
  } catch (err) {
    console.log('Error -> ', { err })
  }

  return Response.json([])
}

export async function POST(request: NextRequest) {
  const formData = await request.formData()

  const requestBody = formDataToJson<PostRequestBodyProps>(formData)

  // console.log('requestBody -> ', requestBody)

  // return NextResponse.json({
  //   requestBody
  // })

  const productProps = getObjectProps<Product>(requestBody.product, [
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

  // console.log('requestBody.product.medias => ', requestBody.product.medias)

  // const productType = resolveProductType(productProps.type)

  const include = productIncludeFactory()

  requestBody.product.tags =
    requestBody.product.tags instanceof Array ? requestBody.product.tags : []
  requestBody.product.medias =
    requestBody.product.medias instanceof Array &&
    requestBody.product.medias.length >= 1
      ? requestBody.product.medias
      : []

  const productTags = requestBody.product.tags.map(title => {
    const slag = generateSlagByTitle(title).replace(/(-[0-9]+)$/, '')

    return {
      title,
      slag
    }
  })

  // productProps.slag = generateSlagByTitle(productProps.title)

  // if (empty(productProps.icon)) {
  //   productProps.icon = 'product-icon-placeholder.jpg'
  // }

  try {
    const product = await prisma.product.create({
      include,
      data: {
        ...setProductDefaultProps(productProps),

        // type: productType,
        // price: parseFloat(String(productProps.price)),

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
      }
    })

    return Response.json(product)
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      // console.log(err)
    }

    console.log('\n\n\n\n\n\n\n\nError -> ', err, '\n\n\n\n')

    return Response.json(
      { message: 'Error while request' },
      {
        status: 400
      }
    )
  }
}
