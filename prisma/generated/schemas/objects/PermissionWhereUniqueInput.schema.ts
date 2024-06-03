import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PermissionWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    key: z.string().optional()
  })
  .strict()

export const PermissionWhereUniqueInputObjectSchema = Schema
