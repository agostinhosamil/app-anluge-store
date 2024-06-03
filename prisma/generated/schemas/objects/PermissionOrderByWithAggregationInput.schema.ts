import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { PermissionCountOrderByAggregateInputObjectSchema } from './PermissionCountOrderByAggregateInput.schema'
import { PermissionAvgOrderByAggregateInputObjectSchema } from './PermissionAvgOrderByAggregateInput.schema'
import { PermissionMaxOrderByAggregateInputObjectSchema } from './PermissionMaxOrderByAggregateInput.schema'
import { PermissionMinOrderByAggregateInputObjectSchema } from './PermissionMinOrderByAggregateInput.schema'
import { PermissionSumOrderByAggregateInputObjectSchema } from './PermissionSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PermissionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    key: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PermissionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => PermissionAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => PermissionMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => PermissionMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => PermissionSumOrderByAggregateInputObjectSchema)
      .optional()
  })
  .strict()

export const PermissionOrderByWithAggregationInputObjectSchema = Schema
