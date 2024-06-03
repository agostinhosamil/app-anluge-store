import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    message: z.literal(true).optional(),
    value: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    userId: z.literal(true).optional()
  })
  .strict()

export const RateMaxAggregateInputObjectSchema = Schema
