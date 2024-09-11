import { $Enums, Prisma } from '@prisma/client'
import { NextResponse } from 'next/server'
import { z } from 'zod'

import { prisma } from '@services/prisma'
import { handler } from '@utils/next'
import { getSearchParamsQueryArgument } from '~/utils'
import { getRequestBody } from '~/utils/server/getRequestBody'
import { categoryRef, productRef } from '~/utils/zod'

export const maxDuration = 60

export const GET = handler(async request => {
  const queryString = request.nextUrl.searchParams
  const productsQueryArguments = getSearchParamsQueryArgument(queryString)
  const highlights = await prisma.highlight.findMany(productsQueryArguments)

  return NextResponse.json(highlights)
})

const PostRequestDataObjectSchema = z.object({
  highlight: z
    .object({
      context: z
        .string()
        .min(1)
        .transform(context => context.toUpperCase() as $Enums.CategoryContext)
        .refine(context => {
          const validContexts = Object.keys($Enums.CategoryContext)

          return validContexts.includes(context)
        }),
      product: productRef()
        .refine(async productId => {
          const highlightProductById = await prisma.highlight.findFirst({
            where: {
              productId
            },

            select: {
              id: true
            }
          })

          return !highlightProductById
        }, 'Product is already highlighted')
        .optional(),
      products: z
        .array(productRef())
        .transform(async productsIds => {
          const alreadyHighlightedProducts = await prisma.highlight.findMany({
            where: {
              productId: {
                in: productsIds
              }
            },

            select: {
              productId: true
            }
          })

          const alreadyHighlightedProductsIds = alreadyHighlightedProducts.map(
            ({ productId }) => productId
          )

          return productsIds.filter(
            productId => !alreadyHighlightedProductsIds.includes(productId)
          )
        })
        .optional(),
      category: categoryRef()
        .refine(async categoryId => {
          const highlightProductById = await prisma.highlight.findFirst({
            where: {
              categoryId
            },

            select: {
              id: true
            }
          })

          return !highlightProductById
        })
        .optional(),

      categories: z
        .array(categoryRef())
        .transform(async categoriesIds => {
          const alreadyHighlightedProducts = await prisma.highlight.findMany({
            where: {
              categoryId: {
                in: categoriesIds
              }
            },

            select: {
              categoryId: true
            }
          })

          const alreadyHighlightedProductsIds = alreadyHighlightedProducts.map(
            ({ categoryId }) => categoryId
          )

          return categoriesIds.filter(
            categoryId => !alreadyHighlightedProductsIds.includes(categoryId)
          )
        })
        .optional()
    })
    // .refine(highlight => {
    //   return highlight.category || highlight.product
    // })
    .transform(highligh => {
      const products = highligh.products ?? []
      const categories = highligh.categories ?? []

      if (highligh.category) {
        categories.push(highligh.category)
      }

      if (highligh.product) {
        products.push(highligh.product)
      }

      const categoriesInputs = categories.map<Prisma.HighlightCreateManyInput>(
        categoryId => ({
          categoryId,
          context: highligh.context
        })
      )

      const productsInputs = products.map<Prisma.HighlightCreateManyInput>(
        productId => ({
          productId,
          context: highligh.context
        })
      )

      return {
        highlights: [...categoriesInputs, ...productsInputs]
      }
    })
})

type PostRequestDataObject = z.infer<typeof PostRequestDataObjectSchema>

export const POST = handler('auth:jwt', async request => {
  const requestBody = await getRequestBody<PostRequestDataObject>(request)

  const validatedRequestBody =
    await PostRequestDataObjectSchema.safeParseAsync(requestBody)

  if (validatedRequestBody.error) {
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

  const { highlights } = validatedRequestBody.data.highlight

  try {
    const highlightedProducts = await prisma.$transaction(
      highlights.map(highlight =>
        prisma.highlight.create({
          data: highlight,

          include: {
            category: {
              select: {
                id: true,
                title: true,
                slag: true,
                banner: true
              }
            },

            product: {
              select: {
                id: true,
                name: true,
                slag: true,
                medias: {
                  take: 1
                }
              }
            }
          }
        })
      )
    )

    return NextResponse.json(highlightedProducts)
  } catch (err) {
    return NextResponse.json({
      status: 'error',
      error: 'not-highlighted',
      message: 'Product could not be highlighted'
    })
  }
})

const DeleteRequestDataObjectSchema = z.object({
  highlight: z
    .object({
      context: z
        .string()
        .min(1)
        .transform(context => context.toUpperCase() as $Enums.CategoryContext)
        .refine(context => {
          const validContexts = Object.keys($Enums.CategoryContext)

          return validContexts.includes(context)
        }),

      product: productRef().nullish(),
      category: categoryRef().nullish()
    })
    .refine(highlight => {
      return highlight.category || highlight.product
    })
    .transform(highlight => {
      if (highlight.category) {
        return {
          context: highlight.context,
          categoryId: highlight.category
        }
      }

      return {
        context: highlight.context,
        productId: highlight.product as string
      }
    })
})

type DeleteRequestDataObject = z.infer<typeof DeleteRequestDataObjectSchema>

export const DELETE = handler('auth:jwt', async request => {
  const requestBody = await getRequestBody<DeleteRequestDataObject>(request)

  const validatedRequestBody =
    await DeleteRequestDataObjectSchema.safeParseAsync(requestBody)

  if (validatedRequestBody.error) {
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

  const { highlight } = validatedRequestBody.data

  try {
    await prisma.highlight.deleteMany({
      where: highlight
    })

    return NextResponse.json({
      status: 200,
      message: 'Highlight successfully deleted'
    })
  } catch (err) {
    return NextResponse.json({
      status: 'error',
      error: 'not-deleted',
      message: 'Highlight could not be deleted'
    })
  }
})
