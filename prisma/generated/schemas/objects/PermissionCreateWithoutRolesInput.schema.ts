import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PermissionCreateWithoutRolesInput> = z
  .object({
    key: z.string(),
    name: z.string(),
    description: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
  })
  .strict()

export const PermissionCreateWithoutRolesInputObjectSchema = Schema
