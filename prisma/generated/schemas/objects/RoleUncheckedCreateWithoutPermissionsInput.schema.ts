import { z } from 'zod'
import { UserUncheckedCreateNestedManyWithoutRoleInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutRoleInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoleUncheckedCreateWithoutPermissionsInput> = z
  .object({
    id: z.number().optional(),
    key: z.string(),
    name: z.string(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    User: z
      .lazy(() => UserUncheckedCreateNestedManyWithoutRoleInputObjectSchema)
      .optional()
  })
  .strict()

export const RoleUncheckedCreateWithoutPermissionsInputObjectSchema = Schema
