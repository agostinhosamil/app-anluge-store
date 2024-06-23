import { Prisma } from '@prisma/client'

export type CartProps = Prisma.CartGetPayload<{
  include: {
    orders: {
      include: {
        product: {
          include: {
            medias: true
          }
        }
      }
    }
    user: {
      include: {
        role: {
          include: {
            permissions: true
          }
        }
      }
    }
  }
}>
