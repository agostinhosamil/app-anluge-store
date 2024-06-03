import { z } from 'zod'
import { ProductTypeSchema } from '../enums/ProductType.schema'
import { MediaCreateNestedManyWithoutProductInputObjectSchema } from './MediaCreateNestedManyWithoutProductInput.schema'
import { TagCreateNestedManyWithoutProductsInputObjectSchema } from './TagCreateNestedManyWithoutProductsInput.schema'
import { FaqCreateNestedManyWithoutProductInputObjectSchema } from './FaqCreateNestedManyWithoutProductInput.schema'
import { CategoryCreateNestedOneWithoutProductsInputObjectSchema } from './CategoryCreateNestedOneWithoutProductsInput.schema'
import { FavoriteCreateNestedManyWithoutProductInputObjectSchema } from './FavoriteCreateNestedManyWithoutProductInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductCreateWithoutOrderInput> = z
  .object({
    id: z.string().optional(),
    code: z.string().optional().nullable(),
    name: z.string(),
    summary: z.string().optional().nullable(),
    description: z.string(),
    price: z.number(),
    slag: z.string(),
    stock: z.number().optional().nullable(),
    sku: z.string().optional().nullable(),
    barCode: z.string().optional().nullable(),
    type: z.lazy(() => ProductTypeSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    medias: z
      .lazy(() => MediaCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
    tags: z
      .lazy(() => TagCreateNestedManyWithoutProductsInputObjectSchema)
      .optional(),
    faqs: z
      .lazy(() => FaqCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
    category: z
      .lazy(() => CategoryCreateNestedOneWithoutProductsInputObjectSchema)
      .optional(),
    favorites: z
      .lazy(() => FavoriteCreateNestedManyWithoutProductInputObjectSchema)
      .optional()
  })
  .strict()

export const ProductCreateWithoutOrderInputObjectSchema = Schema
