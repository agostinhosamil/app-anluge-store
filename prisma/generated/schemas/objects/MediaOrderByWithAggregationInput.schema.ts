import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { MediaCountOrderByAggregateInputObjectSchema } from './MediaCountOrderByAggregateInput.schema'
import { MediaMaxOrderByAggregateInputObjectSchema } from './MediaMaxOrderByAggregateInput.schema'
import { MediaMinOrderByAggregateInputObjectSchema } from './MediaMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    fileName: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    productId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    rateId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    _count: z
      .lazy(() => MediaCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => MediaMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => MediaMinOrderByAggregateInputObjectSchema).optional()
  })
  .strict()

export const MediaOrderByWithAggregationInputObjectSchema = Schema
