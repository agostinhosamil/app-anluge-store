import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema'
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FavoriteOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    product: z
      .lazy(() => ProductOrderByWithRelationInputObjectSchema)
      .optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
  })
  .strict()

export const FavoriteOrderByWithRelationInputObjectSchema = Schema
