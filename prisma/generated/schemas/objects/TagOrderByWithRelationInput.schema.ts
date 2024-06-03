import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ProductOrderByRelationAggregateInputObjectSchema } from './ProductOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TagOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    slag: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    products: z
      .lazy(() => ProductOrderByRelationAggregateInputObjectSchema)
      .optional()
  })
  .strict()

export const TagOrderByWithRelationInputObjectSchema = Schema
