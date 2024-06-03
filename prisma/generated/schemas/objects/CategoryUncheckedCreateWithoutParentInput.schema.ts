import { z } from 'zod'
import { ProductUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutCategoryInput.schema'
import { CategoryUncheckedCreateNestedManyWithoutParentInputObjectSchema } from './CategoryUncheckedCreateNestedManyWithoutParentInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutParentInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    slag: z.string(),
    icon: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    products: z
      .lazy(
        () => ProductUncheckedCreateNestedManyWithoutCategoryInputObjectSchema
      )
      .optional(),
    categories: z
      .lazy(
        () => CategoryUncheckedCreateNestedManyWithoutParentInputObjectSchema
      )
      .optional()
  })
  .strict()

export const CategoryUncheckedCreateWithoutParentInputObjectSchema = Schema
