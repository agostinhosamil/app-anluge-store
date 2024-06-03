import { z } from 'zod'
import { UserCreateNestedManyWithoutRoleInputObjectSchema } from './UserCreateNestedManyWithoutRoleInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoleCreateWithoutPermissionsInput> = z
  .object({
    key: z.string(),
    name: z.string(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    User: z
      .lazy(() => UserCreateNestedManyWithoutRoleInputObjectSchema)
      .optional()
  })
  .strict()

export const RoleCreateWithoutPermissionsInputObjectSchema = Schema
