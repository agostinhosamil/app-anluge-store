import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'
import { MediaOrderByRelationAggregateInputObjectSchema } from './MediaOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    message: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    medias: z
      .lazy(() => MediaOrderByRelationAggregateInputObjectSchema)
      .optional()
  })
  .strict()

export const RateOrderByWithRelationInputObjectSchema = Schema
