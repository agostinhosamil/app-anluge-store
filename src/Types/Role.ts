import { Prisma, Role as RoleModel } from '@prisma/client'

export type RoleProps = Prisma.RoleGetPayload<{
  include: {
    permissions: true
  }
}>

export type Role = Omit<RoleModel, 'id' | 'createdAt' | 'updatedAt'>
