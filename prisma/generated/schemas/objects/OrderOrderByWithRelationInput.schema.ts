import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema'
import { CartOrderByWithRelationInputObjectSchema } from './CartOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrderOrderByWithRelationInput> = z
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
    product: z
      .lazy(() => ProductOrderByWithRelationInputObjectSchema)
      .optional(),
    Cart: z.lazy(() => CartOrderByWithRelationInputObjectSchema).optional()
  })
  .strict()

export const OrderOrderByWithRelationInputObjectSchema = Schema
