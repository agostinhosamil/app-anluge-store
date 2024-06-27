import { NextResponse } from 'next/server'

import { prisma } from '~/services/prisma'
import { NextApiHandler } from '~/Types/next'
import { ProductProps } from '~/Types/Product'
import { productIncludeFactory } from '~/utils/product'
import { redirectToLoginIfUnAuthenticated } from '~/utils/server'

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
