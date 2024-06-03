import { z } from 'zod'
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema'
import { CategoryCreateWithoutParentInputObjectSchema } from './CategoryCreateWithoutParentInput.schema'
import { CategoryUncheckedCreateWithoutParentInputObjectSchema } from './CategoryUncheckedCreateWithoutParentInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutParentInput> = z
  .object({
    where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutParentInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutParentInputObjectSchema)
    ])
  })
  .strict()

export const CategoryCreateOrConnectWithoutParentInputObjectSchema = Schema
