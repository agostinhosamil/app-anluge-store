import { Prisma } from '@prisma/client'

export type AdvertiseProps = Prisma.AdvertiseGetPayload<{
  include: {
    post: true
    product: true
  }
}>
