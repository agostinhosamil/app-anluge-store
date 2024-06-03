import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    code: z.literal(true).optional(),
    name: z.literal(true).optional(),
    summary: z.literal(true).optional(),
    description: z.literal(true).optional(),
    price: z.literal(true).optional(),
    slag: z.literal(true).optional(),
    stock: z.literal(true).optional(),
    sku: z.literal(true).optional(),
    barCode: z.literal(true).optional(),
    type: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    categoryId: z.literal(true).optional(),
    _all: z.literal(true).optional()
  })
  .strict()

export const ProductCountAggregateInputObjectSchema = Schema
