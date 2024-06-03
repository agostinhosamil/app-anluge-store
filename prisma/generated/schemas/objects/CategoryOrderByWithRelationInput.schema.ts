import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { ProductOrderByRelationAggregateInputObjectSchema } from './ProductOrderByRelationAggregateInput.schema'
import { CategoryOrderByRelationAggregateInputObjectSchema } from './CategoryOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    slag: z.lazy(() => SortOrderSchema).optional(),
    icon: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    parentId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    products: z
      .lazy(() => ProductOrderByRelationAggregateInputObjectSchema)
      .optional(),
    parent: z
      .lazy(() => CategoryOrderByWithRelationInputObjectSchema)
      .optional(),
    categories: z
      .lazy(() => CategoryOrderByRelationAggregateInputObjectSchema)
      .optional()
  })
  .strict()

export const CategoryOrderByWithRelationInputObjectSchema = Schema
