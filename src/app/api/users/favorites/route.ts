import { NextResponse } from 'next/server'
import { z } from 'zod'

import { prisma } from '~/services/prisma'
import { NextApiHandler } from '~/Types/next'
import { ProductProps } from '~/Types/Product'
import { productIncludeFactory } from '~/utils/product'
import { redirectToLoginIfUnAuthenticated } from '~/utils/server'
import { getRequestBody } from '~/utils/server/getRequestBody'

export const GET: NextApiHandler = async () => {
  const signInData = await redirectToLoginIfUnAuthenticated()

  const { user } = signInData

  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      id: user.id
    },

    include: {
      favorites: {
        include: {
          product: {
            include: productIncludeFactory()
          }
        }
      }
    }
  })

  const userFavorites: Array<ProductProps> = userData.favorites.map(
    favorite => favorite.product
  )

  return NextResponse.json(userFavorites, {
    headers: {
      'x-favorites-count': String(userFavorites.length)
    }
  })
}

const PostRequestBodySchema = z.object({
  products: z
    .array(
      z.object({
        id: z.string().min(5).cuid()
      })
    )
    .min(1)
    .refine(async productsData => {
      const products = await prisma.$transaction(
        productsData.map(productData => {
          return prisma.product.findUnique({
            where: {
              id: productData.id
            },

            select: {
              id: true
            }
          })
        })
      )

      return !products.some(product => !product)
    })
})

type PostRequestBodyProps = z.infer<typeof PostRequestBodySchema>

export const POST: NextApiHandler = async request => {
  const signInData = await redirectToLoginIfUnAuthenticated()

  const { user } = signInData

  const clientRequestBody = await getRequestBody<PostRequestBodyProps>(request)

  const requestBody =
    await PostRequestBodySchema.safeParseAsync(clientRequestBody)

  if (!requestBody.success) {
    return NextResponse.json({
      error: true,
      success: false,
      message: 'Invalid request input',
      errors: requestBody.error.errors
    })
  }

  const { data } = requestBody

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id
    },

    data: {
      favorites: {
        createMany: {
          data: data.products.map(product => ({
            productId: product.id
          })),

          skipDuplicates: true
        }
      }
    },

    include: {
      favorites: {
        include: {
          product: {
            include: productIncludeFactory()
          }
        }
      }
    }
  })

  const favorites: Array<ProductProps> = updatedUser.favorites.map(
    favorite => favorite.product
  )

  return NextResponse.json(favorites, {
    headers: {
      'x-favorites-count': String(favorites.length)
    }
  })
}

const DeleteRequestBodySchema = z.object({
  products: z
    .array(
      z.object({
        id: z.string().min(5).cuid()
      })
    )
    .min(1)
})

type DeleteRequestBodyProps = z.infer<typeof DeleteRequestBodySchema>

export const DELETE: NextApiHandler = async request => {
  const signInData = await redirectToLoginIfUnAuthenticated()

  const { user } = signInData

  const clientRequestBody =
    await getRequestBody<DeleteRequestBodyProps>(request)

  const requestBody =
    await PostRequestBodySchema.safeParseAsync(clientRequestBody)

  if (!requestBody.success) {
    return NextResponse.json({
      error: true,
      success: false,
      message: 'Invalid request input',
      errors: requestBody.error.errors
    })
  }

  const { data } = requestBody

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id
    },

    data: {
      favorites: {
        deleteMany: data.products.map(product => ({
          productId: product.id
        }))
      }
    },

    include: {
      favorites: {
        include: {
          product: {
            include: productIncludeFactory()
          }
        }
      }
    }
  })

  const favorites: Array<ProductProps> = updatedUser.favorites.map(
    favorite => favorite.product
  )

  return NextResponse.json(favorites, {
    headers: {
      'x-favorites-count': String(favorites.length)
    }
  })
}
