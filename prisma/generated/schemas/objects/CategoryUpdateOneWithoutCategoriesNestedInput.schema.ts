import { z } from 'zod'
import { CategoryCreateWithoutCategoriesInputObjectSchema } from './CategoryCreateWithoutCategoriesInput.schema'
import { CategoryUncheckedCreateWithoutCategoriesInputObjectSchema } from './CategoryUncheckedCreateWithoutCategoriesInput.schema'
import { CategoryCreateOrConnectWithoutCategoriesInputObjectSchema } from './CategoryCreateOrConnectWithoutCategoriesInput.schema'
import { CategoryUpsertWithoutCategoriesInputObjectSchema } from './CategoryUpsertWithoutCategoriesInput.schema'
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema'
import { CategoryUpdateWithoutCategoriesInputObjectSchema } from './CategoryUpdateWithoutCategoriesInput.schema'
import { CategoryUncheckedUpdateWithoutCategoriesInputObjectSchema } from './CategoryUncheckedUpdateWithoutCategoriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CategoryUpdateOneWithoutCategoriesNestedInput> =
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
      upsert: z
        .lazy(() => CategoryUpsertWithoutCategoriesInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CategoryUpdateWithoutCategoriesInputObjectSchema),
          z.lazy(
            () => CategoryUncheckedUpdateWithoutCategoriesInputObjectSchema
          )
        ])
        .optional()
    })
    .strict()

export const CategoryUpdateOneWithoutCategoriesNestedInputObjectSchema = Schema
