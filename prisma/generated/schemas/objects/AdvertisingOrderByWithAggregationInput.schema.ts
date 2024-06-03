import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { AdvertisingCountOrderByAggregateInputObjectSchema } from './AdvertisingCountOrderByAggregateInput.schema'
import { AdvertisingMaxOrderByAggregateInputObjectSchema } from './AdvertisingMaxOrderByAggregateInput.schema'
import { AdvertisingMinOrderByAggregateInputObjectSchema } from './AdvertisingMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AdvertisingOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    expiresAt: z.lazy(() => SortOrderSchema).optional(),
    banner: z.lazy(() => SortOrderSchema).optional(),
    link: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    title: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AdvertisingCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => AdvertisingMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => AdvertisingMinOrderByAggregateInputObjectSchema)
      .optional()
  })
  .strict()

export const AdvertisingOrderByWithAggregationInputObjectSchema = Schema
