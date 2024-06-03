import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { FaqCountOrderByAggregateInputObjectSchema } from './FaqCountOrderByAggregateInput.schema'
import { FaqMaxOrderByAggregateInputObjectSchema } from './FaqMaxOrderByAggregateInput.schema'
import { FaqMinOrderByAggregateInputObjectSchema } from './FaqMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    question: z.lazy(() => SortOrderSchema).optional(),
    answer: z.lazy(() => SortOrderSchema).optional(),
    published: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    productId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => FaqCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => FaqMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => FaqMinOrderByAggregateInputObjectSchema).optional()
  })
  .strict()

export const FaqOrderByWithAggregationInputObjectSchema = Schema
