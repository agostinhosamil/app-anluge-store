import { z } from 'zod'
import { RoleCreateNestedManyWithoutPermissionsInputObjectSchema } from './RoleCreateNestedManyWithoutPermissionsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PermissionCreateInput> = z
  .object({
    key: z.string(),
    name: z.string(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    roles: z
      .lazy(() => RoleCreateNestedManyWithoutPermissionsInputObjectSchema)
      .optional()
  })
  .strict()

export const PermissionCreateInputObjectSchema = Schema
