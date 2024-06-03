import { z } from 'zod'
import { RoleUncheckedCreateNestedManyWithoutPermissionsInputObjectSchema } from './RoleUncheckedCreateNestedManyWithoutPermissionsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PermissionUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    key: z.string(),
    name: z.string(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    roles: z
      .lazy(
        () => RoleUncheckedCreateNestedManyWithoutPermissionsInputObjectSchema
      )
      .optional()
  })
  .strict()

export const PermissionUncheckedCreateInputObjectSchema = Schema
