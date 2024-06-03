import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { MediaOrderByRelationAggregateInputObjectSchema } from './MediaOrderByRelationAggregateInput.schema'
import { TagOrderByRelationAggregateInputObjectSchema } from './TagOrderByRelationAggregateInput.schema'
import { FaqOrderByRelationAggregateInputObjectSchema } from './FaqOrderByRelationAggregateInput.schema'
import { CategoryOrderByWithRelationInputObjectSchema } from './CategoryOrderByWithRelationInput.schema'
import { FavoriteOrderByRelationAggregateInputObjectSchema } from './FavoriteOrderByRelationAggregateInput.schema'
import { OrderOrderByRelationAggregateInputObjectSchema } from './OrderOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    code: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    summary: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    slag: z.lazy(() => SortOrderSchema).optional(),
    stock: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    sku: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    barCode: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema)
      ])
      .optional(),
    medias: z
      .lazy(() => MediaOrderByRelationAggregateInputObjectSchema)
      .optional(),
    tags: z.lazy(() => TagOrderByRelationAggregateInputObjectSchema).optional(),
    faqs: z.lazy(() => FaqOrderByRelationAggregateInputObjectSchema).optional(),
    category: z
      .lazy(() => CategoryOrderByWithRelationInputObjectSchema)
      .optional(),
    favorites: z
      .lazy(() => FavoriteOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Order: z
      .lazy(() => OrderOrderByRelationAggregateInputObjectSchema)
      .optional()
  })
  .strict()

export const ProductOrderByWithRelationInputObjectSchema = Schema
