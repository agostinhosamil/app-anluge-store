import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateSumAggregateInputType> = z
  .object({
    value: z.literal(true).optional()
  })
  .strict()

export const RateSumAggregateInputObjectSchema = Schema
