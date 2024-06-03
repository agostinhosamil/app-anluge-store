import { Prisma } from '@prisma/client'

export type RoleProps = Prisma.RoleGetPayload<{
  include: {
    permissions: true
  }
}>
