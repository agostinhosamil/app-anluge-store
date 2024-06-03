import { z } from 'zod'
import { CategoryCreateWithoutCategoriesInputObjectSchema } from './CategoryCreateWithoutCategoriesInput.schema'
import { CategoryUncheckedCreateWithoutCategoriesInputObjectSchema } from './CategoryUncheckedCreateWithoutCategoriesInput.schema'
import { CategoryCreateOrConnectWithoutCategoriesInputObjectSchema } from './CategoryCreateOrConnectWithoutCategoriesInput.schema'
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutCategoriesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CategoryCreateWithoutCategoriesInputObjectSchema),
          z.lazy(
            () => CategoryUncheckedCreateWithoutCategoriesInputObjectSchema
          )
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => CategoryCreateOrConnectWithoutCategoriesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional()
    })
    .strict()

export const CategoryCreateNestedOneWithoutCategoriesInputObjectSchema = Schema
