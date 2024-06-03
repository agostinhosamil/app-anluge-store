import { z } from 'zod'
import { PermissionCreateNestedManyWithoutRolesInputObjectSchema } from './PermissionCreateNestedManyWithoutRolesInput.schema'
import { UserCreateNestedManyWithoutRoleInputObjectSchema } from './UserCreateNestedManyWithoutRoleInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoleCreateInput> = z
  .object({
    key: z.string(),
    name: z.string(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    permissions: z
      .lazy(() => PermissionCreateNestedManyWithoutRolesInputObjectSchema)
      .optional(),
    User: z
      .lazy(() => UserCreateNestedManyWithoutRoleInputObjectSchema)
      .optional()
  })
  .strict()

export const RoleCreateInputObjectSchema = Schema
