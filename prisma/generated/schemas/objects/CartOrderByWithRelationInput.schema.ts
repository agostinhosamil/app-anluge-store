import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { OrderOrderByRelationAggregateInputObjectSchema } from './OrderOrderByRelationAggregateInput.schema'
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CartOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    orders: z
      .lazy(() => OrderOrderByRelationAggregateInputObjectSchema)
      .optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
  })
  .strict()

export const CartOrderByWithRelationInputObjectSchema = Schema
