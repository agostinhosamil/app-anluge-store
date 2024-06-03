import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrderMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    cartId: z.literal(true).optional(),
    productId: z.literal(true).optional()
  })
  .strict()

export const OrderMaxAggregateInputObjectSchema = Schema
