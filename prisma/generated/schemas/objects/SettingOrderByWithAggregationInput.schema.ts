import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SettingCountOrderByAggregateInputObjectSchema } from './SettingCountOrderByAggregateInput.schema'
import { SettingAvgOrderByAggregateInputObjectSchema } from './SettingAvgOrderByAggregateInput.schema'
import { SettingMaxOrderByAggregateInputObjectSchema } from './SettingMaxOrderByAggregateInput.schema'
import { SettingMinOrderByAggregateInputObjectSchema } from './SettingMinOrderByAggregateInput.schema'
import { SettingSumOrderByAggregateInputObjectSchema } from './SettingSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SettingOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    property: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SettingCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => SettingAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => SettingMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SettingMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => SettingSumOrderByAggregateInputObjectSchema).optional()
  })
  .strict()

export const SettingOrderByWithAggregationInputObjectSchema = Schema
