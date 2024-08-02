import { Prisma } from '@prisma/client'

export type FavoriteWithProductId = Prisma.FavoriteGetPayload<{
  include: {
    product: {
      select: {
        id: true
      }
    }
  }
}>
