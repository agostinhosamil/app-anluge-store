import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { ProductCountOrderByAggregateInputObjectSchema } from './ProductCountOrderByAggregateInput.schema'
import { ProductAvgOrderByAggregateInputObjectSchema } from './ProductAvgOrderByAggregateInput.schema'
import { ProductMaxOrderByAggregateInputObjectSchema } from './ProductMaxOrderByAggregateInput.schema'
import { ProductMinOrderByAggregateInputObjectSchema } from './ProductMinOrderByAggregateInput.schema'
import { ProductSumOrderByAggregateInputObjectSchema } from './ProductSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    code: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    summary: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    slag: z.lazy(() => SortOrderSchema).optional(),
    stock: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    sku: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    barCode: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    _count: z
      .lazy(() => ProductCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ProductAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ProductMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ProductMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ProductSumOrderByAggregateInputObjectSchema).optional()
  })
  .strict()

export const ProductOrderByWithAggregationInputObjectSchema = Schema
