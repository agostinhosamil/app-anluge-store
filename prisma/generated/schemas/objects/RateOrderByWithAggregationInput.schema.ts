import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { RateCountOrderByAggregateInputObjectSchema } from './RateCountOrderByAggregateInput.schema'
import { RateAvgOrderByAggregateInputObjectSchema } from './RateAvgOrderByAggregateInput.schema'
import { RateMaxOrderByAggregateInputObjectSchema } from './RateMaxOrderByAggregateInput.schema'
import { RateMinOrderByAggregateInputObjectSchema } from './RateMinOrderByAggregateInput.schema'
import { RateSumOrderByAggregateInputObjectSchema } from './RateSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    message: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => RateCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => RateAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => RateMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => RateMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => RateSumOrderByAggregateInputObjectSchema).optional()
  })
  .strict()

export const RateOrderByWithAggregationInputObjectSchema = Schema
