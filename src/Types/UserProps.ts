import { Prisma } from '@prisma/client'

export type UserProps = Prisma.UserGetPayload<{
  include: {
    carts: {
      include: {
        orders: {
          include: {
            product: {
              include: {
                medias: true
                category: true
              }
            }
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
