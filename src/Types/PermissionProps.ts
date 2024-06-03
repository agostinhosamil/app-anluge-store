import { Prisma } from '@prisma/client'

export type PermissionProps = Prisma.PermissionGetPayload<{
  include: {
    roles: true
  }
}>
