import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    question: z.literal(true).optional(),
    answer: z.literal(true).optional(),
    published: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    productId: z.literal(true).optional(),
    userId: z.literal(true).optional()
  })
  .strict()

export const FaqMinAggregateInputObjectSchema = Schema
