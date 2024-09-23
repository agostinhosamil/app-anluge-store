import { Prisma } from '@prisma/client'

export type ProductProps = Prisma.ProductGetPayload<{
  select: {
    id: true
    name: true
    slag: true
    price: true

    rates: {
      select: {
        id: true
        value: true
      }
    }

    medias: {
      take: 1
    }
  }
}>
