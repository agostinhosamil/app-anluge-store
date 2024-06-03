import { z } from 'zod'
import { ProductCreateNestedManyWithoutCategoryInputObjectSchema } from './ProductCreateNestedManyWithoutCategoryInput.schema'
import { CategoryCreateNestedOneWithoutCategoriesInputObjectSchema } from './CategoryCreateNestedOneWithoutCategoriesInput.schema'
import { CategoryCreateNestedManyWithoutParentInputObjectSchema } from './CategoryCreateNestedManyWithoutParentInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CategoryCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    slag: z.string(),
    icon: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    products: z
      .lazy(() => ProductCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
    parent: z
      .lazy(() => CategoryCreateNestedOneWithoutCategoriesInputObjectSchema)
      .optional(),
    categories: z
      .lazy(() => CategoryCreateNestedManyWithoutParentInputObjectSchema)
      .optional()
  })
  .strict()

export const CategoryCreateInputObjectSchema = Schema
