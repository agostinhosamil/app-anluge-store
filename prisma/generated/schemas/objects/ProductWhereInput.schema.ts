import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { FloatFilterObjectSchema } from './FloatFilter.schema'
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema'
import { EnumProductTypeFilterObjectSchema } from './EnumProductTypeFilter.schema'
import { ProductTypeSchema } from '../enums/ProductType.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { MediaListRelationFilterObjectSchema } from './MediaListRelationFilter.schema'
import { TagListRelationFilterObjectSchema } from './TagListRelationFilter.schema'
import { FaqListRelationFilterObjectSchema } from './FaqListRelationFilter.schema'
import { CategoryRelationFilterObjectSchema } from './CategoryRelationFilter.schema'
import { CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema'
import { FavoriteListRelationFilterObjectSchema } from './FavoriteListRelationFilter.schema'
import { OrderListRelationFilterObjectSchema } from './OrderListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProductWhereInputObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => ProductWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProductWhereInputObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    code: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    summary: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    price: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    slag: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    stock: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    sku: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    barCode: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    type: z
      .union([
        z.lazy(() => EnumProductTypeFilterObjectSchema),
        z.lazy(() => ProductTypeSchema)
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    categoryId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    medias: z.lazy(() => MediaListRelationFilterObjectSchema).optional(),
    tags: z.lazy(() => TagListRelationFilterObjectSchema).optional(),
    faqs: z.lazy(() => FaqListRelationFilterObjectSchema).optional(),
    category: z
      .union([
        z.lazy(() => CategoryRelationFilterObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema)
      ])
      .optional()
      .nullable(),
    favorites: z.lazy(() => FavoriteListRelationFilterObjectSchema).optional(),
    Order: z.lazy(() => OrderListRelationFilterObjectSchema).optional()
  })
  .strict()

export const ProductWhereInputObjectSchema = Schema
