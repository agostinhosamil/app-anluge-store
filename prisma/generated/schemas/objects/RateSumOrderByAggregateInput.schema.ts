import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateSumOrderByAggregateInput> = z
  .object({
    value: z.lazy(() => SortOrderSchema).optional()
  })
  .strict()

export const RateSumOrderByAggregateInputObjectSchema = Schema
