import { Prisma } from '@prisma/client'
import { CartInclude } from './Cart'

export type UserProps = Prisma.UserGetPayload<{
  include: {
    carts: {
      include: CartInclude
    }
    role: {
      include: {
        permissions: true
      }
    }
  }
}>

export type UserPropsWithFavorites = Prisma.UserGetPayload<{
  include: {
    carts: {
      include: CartInclude
    }
    favorites: {
      include: {
        product: {
          select: {
            id: true
          }
        }
      }
    }
    role: {
      include: {
        permissions: true
      }
    }
  }
}>
