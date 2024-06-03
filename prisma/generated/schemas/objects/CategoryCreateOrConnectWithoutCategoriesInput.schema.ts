import { z } from 'zod'
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema'
import { CategoryCreateWithoutCategoriesInputObjectSchema } from './CategoryCreateWithoutCategoriesInput.schema'
import { CategoryUncheckedCreateWithoutCategoriesInputObjectSchema } from './CategoryUncheckedCreateWithoutCategoriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutCategoriesInput> =
  z
    .object({
      where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => CategoryCreateWithoutCategoriesInputObjectSchema),
        z.lazy(() => CategoryUncheckedCreateWithoutCategoriesInputObjectSchema)
      ])
    })
    .strict()

export const CategoryCreateOrConnectWithoutCategoriesInputObjectSchema = Schema
