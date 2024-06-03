import { z } from 'zod'
import { ProductTypeSchema } from '../enums/ProductType.schema'
import { MediaUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './MediaUncheckedCreateNestedManyWithoutProductInput.schema'
import { TagUncheckedCreateNestedManyWithoutProductsInputObjectSchema } from './TagUncheckedCreateNestedManyWithoutProductsInput.schema'
import { FaqUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './FaqUncheckedCreateNestedManyWithoutProductInput.schema'
import { OrderUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutProductInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductUncheckedCreateWithoutFavoritesInput> = z
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
    categoryId: z.string().optional().nullable(),
    medias: z
      .lazy(() => MediaUncheckedCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
    tags: z
      .lazy(() => TagUncheckedCreateNestedManyWithoutProductsInputObjectSchema)
      .optional(),
    faqs: z
      .lazy(() => FaqUncheckedCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
    Order: z
      .lazy(() => OrderUncheckedCreateNestedManyWithoutProductInputObjectSchema)
      .optional()
  })
  .strict()

export const ProductUncheckedCreateWithoutFavoritesInputObjectSchema = Schema
