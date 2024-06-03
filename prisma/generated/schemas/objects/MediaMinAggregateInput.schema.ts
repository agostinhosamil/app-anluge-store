import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    fileName: z.literal(true).optional(),
    type: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    productId: z.literal(true).optional(),
    rateId: z.literal(true).optional()
  })
  .strict()

export const MediaMinAggregateInputObjectSchema = Schema
