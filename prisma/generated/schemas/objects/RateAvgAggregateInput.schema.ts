import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateAvgAggregateInputType> = z
  .object({
    value: z.literal(true).optional()
  })
  .strict()

export const RateAvgAggregateInputObjectSchema = Schema
