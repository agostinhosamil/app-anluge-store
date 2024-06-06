import { Permission as PermissionModel, Prisma } from '@prisma/client'

export type PermissionProps = Prisma.PermissionGetPayload<{
  include: {
    roles: true
  }
}>

export type Permission = Omit<PermissionModel, 'id' | 'createdAt' | 'updatedAt'>
