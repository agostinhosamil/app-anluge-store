import { z } from 'zod'
import { PermissionCreateNestedManyWithoutRolesInputObjectSchema } from './PermissionCreateNestedManyWithoutRolesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoleCreateWithoutUserInput> = z
  .object({
    key: z.string(),
    name: z.string(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    permissions: z
      .lazy(() => PermissionCreateNestedManyWithoutRolesInputObjectSchema)
      .optional()
  })
  .strict()

export const RoleCreateWithoutUserInputObjectSchema = Schema
