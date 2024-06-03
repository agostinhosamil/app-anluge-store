import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema'
import { RateOrderByWithRelationInputObjectSchema } from './RateOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    fileName: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    productId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    rateId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    Product: z
      .lazy(() => ProductOrderByWithRelationInputObjectSchema)
      .optional(),
    Rate: z.lazy(() => RateOrderByWithRelationInputObjectSchema).optional()
  })
  .strict()

export const MediaOrderByWithRelationInputObjectSchema = Schema
