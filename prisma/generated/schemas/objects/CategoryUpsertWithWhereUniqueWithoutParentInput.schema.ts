import { z } from 'zod'
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema'
import { CategoryUpdateWithoutParentInputObjectSchema } from './CategoryUpdateWithoutParentInput.schema'
import { CategoryUncheckedUpdateWithoutParentInputObjectSchema } from './CategoryUncheckedUpdateWithoutParentInput.schema'
import { CategoryCreateWithoutParentInputObjectSchema } from './CategoryCreateWithoutParentInput.schema'
import { CategoryUncheckedCreateWithoutParentInputObjectSchema } from './CategoryUncheckedCreateWithoutParentInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CategoryUpsertWithWhereUniqueWithoutParentInput> =
  z
    .object({
      where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => CategoryUpdateWithoutParentInputObjectSchema),
        z.lazy(() => CategoryUncheckedUpdateWithoutParentInputObjectSchema)
      ]),
      create: z.union([
        z.lazy(() => CategoryCreateWithoutParentInputObjectSchema),
        z.lazy(() => CategoryUncheckedCreateWithoutParentInputObjectSchema)
      ])
    })
    .strict()

export const CategoryUpsertWithWhereUniqueWithoutParentInputObjectSchema =
  Schema
