import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { VerificationRequestCountOrderByAggregateInputObjectSchema } from './VerificationRequestCountOrderByAggregateInput.schema'
import { VerificationRequestMaxOrderByAggregateInputObjectSchema } from './VerificationRequestMaxOrderByAggregateInput.schema'
import { VerificationRequestMinOrderByAggregateInputObjectSchema } from './VerificationRequestMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VerificationRequestOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      identifier: z.lazy(() => SortOrderSchema).optional(),
      token: z.lazy(() => SortOrderSchema).optional(),
      expires: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => VerificationRequestCountOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => VerificationRequestMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => VerificationRequestMinOrderByAggregateInputObjectSchema)
        .optional()
    })
    .strict()

export const VerificationRequestOrderByWithAggregationInputObjectSchema = Schema
