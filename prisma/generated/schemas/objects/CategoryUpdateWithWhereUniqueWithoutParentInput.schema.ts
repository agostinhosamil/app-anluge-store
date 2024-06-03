import { z } from 'zod'
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema'
import { CategoryUpdateWithoutParentInputObjectSchema } from './CategoryUpdateWithoutParentInput.schema'
import { CategoryUncheckedUpdateWithoutParentInputObjectSchema } from './CategoryUncheckedUpdateWithoutParentInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CategoryUpdateWithWhereUniqueWithoutParentInput> =
  z
    .object({
      where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => CategoryUpdateWithoutParentInputObjectSchema),
        z.lazy(() => CategoryUncheckedUpdateWithoutParentInputObjectSchema)
      ])
    })
    .strict()

export const CategoryUpdateWithWhereUniqueWithoutParentInputObjectSchema =
  Schema
