import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrderUncheckedCreateWithoutProductInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    cartId: z.string().optional().nullable()
  })
  .strict()

export const OrderUncheckedCreateWithoutProductInputObjectSchema = Schema
