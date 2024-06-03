import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { ProductListRelationFilterObjectSchema } from './ProductListRelationFilter.schema'
import { CategoryRelationFilterObjectSchema } from './CategoryRelationFilter.schema'
import { CategoryListRelationFilterObjectSchema } from './CategoryListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CategoryWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CategoryWhereInputObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => CategoryWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CategoryWhereInputObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    slag: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    icon: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    parentId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    products: z.lazy(() => ProductListRelationFilterObjectSchema).optional(),
    parent: z
      .union([
        z.lazy(() => CategoryRelationFilterObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema)
      ])
      .optional()
      .nullable(),
    categories: z.lazy(() => CategoryListRelationFilterObjectSchema).optional()
  })
  .strict()

export const CategoryWhereInputObjectSchema = Schema
