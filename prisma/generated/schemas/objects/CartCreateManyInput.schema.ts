import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CartCreateManyInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string()
  })
  .strict()

export const CartCreateManyInputObjectSchema = Schema
