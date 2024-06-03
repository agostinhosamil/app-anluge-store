import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { UserTokenCountOrderByAggregateInputObjectSchema } from './UserTokenCountOrderByAggregateInput.schema'
import { UserTokenAvgOrderByAggregateInputObjectSchema } from './UserTokenAvgOrderByAggregateInput.schema'
import { UserTokenMaxOrderByAggregateInputObjectSchema } from './UserTokenMaxOrderByAggregateInput.schema'
import { UserTokenMinOrderByAggregateInputObjectSchema } from './UserTokenMinOrderByAggregateInput.schema'
import { UserTokenSumOrderByAggregateInputObjectSchema } from './UserTokenSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserTokenOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    body: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => UserTokenCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => UserTokenAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => UserTokenMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => UserTokenMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z.lazy(() => UserTokenSumOrderByAggregateInputObjectSchema).optional()
  })
  .strict()

export const UserTokenOrderByWithAggregationInputObjectSchema = Schema
