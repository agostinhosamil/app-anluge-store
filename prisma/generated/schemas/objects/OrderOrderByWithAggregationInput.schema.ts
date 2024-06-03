import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { OrderCountOrderByAggregateInputObjectSchema } from './OrderCountOrderByAggregateInput.schema'
import { OrderMaxOrderByAggregateInputObjectSchema } from './OrderMaxOrderByAggregateInput.schema'
import { OrderMinOrderByAggregateInputObjectSchema } from './OrderMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrderOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    cartId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => OrderCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => OrderMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => OrderMinOrderByAggregateInputObjectSchema).optional()
  })
  .strict()

export const OrderOrderByWithAggregationInputObjectSchema = Schema
