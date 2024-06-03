import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FavoriteSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional()
  })
  .strict()

export const FavoriteSumAggregateInputObjectSchema = Schema
