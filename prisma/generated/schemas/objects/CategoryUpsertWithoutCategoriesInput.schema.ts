import { z } from 'zod'
import { CategoryUpdateWithoutCategoriesInputObjectSchema } from './CategoryUpdateWithoutCategoriesInput.schema'
import { CategoryUncheckedUpdateWithoutCategoriesInputObjectSchema } from './CategoryUncheckedUpdateWithoutCategoriesInput.schema'
import { CategoryCreateWithoutCategoriesInputObjectSchema } from './CategoryCreateWithoutCategoriesInput.schema'
import { CategoryUncheckedCreateWithoutCategoriesInputObjectSchema } from './CategoryUncheckedCreateWithoutCategoriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CategoryUpsertWithoutCategoriesInput> = z
  .object({
    update: z.union([
      z.lazy(() => CategoryUpdateWithoutCategoriesInputObjectSchema),
      z.lazy(() => CategoryUncheckedUpdateWithoutCategoriesInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutCategoriesInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutCategoriesInputObjectSchema)
    ])
  })
  .strict()

export const CategoryUpsertWithoutCategoriesInputObjectSchema = Schema
