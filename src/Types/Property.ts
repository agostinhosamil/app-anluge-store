import { Prisma } from '@prisma/client'

export type PropertyProps = Prisma.PropertyGetPayload<{
  include: {
    properties: true
  }
}>
