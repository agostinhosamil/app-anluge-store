import { z } from 'zod'
import { PermissionUncheckedCreateNestedManyWithoutRolesInputObjectSchema } from './PermissionUncheckedCreateNestedManyWithoutRolesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoleUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.number().optional(),
    key: z.string(),
    name: z.string(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    permissions: z
      .lazy(
        () => PermissionUncheckedCreateNestedManyWithoutRolesInputObjectSchema
      )
      .optional()
  })
  .strict()

export const RoleUncheckedCreateWithoutUserInputObjectSchema = Schema
