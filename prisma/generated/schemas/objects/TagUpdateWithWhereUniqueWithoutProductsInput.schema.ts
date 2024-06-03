import { z } from 'zod'
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema'
import { TagUpdateWithoutProductsInputObjectSchema } from './TagUpdateWithoutProductsInput.schema'
import { TagUncheckedUpdateWithoutProductsInputObjectSchema } from './TagUncheckedUpdateWithoutProductsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutProductsInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TagUpdateWithoutProductsInputObjectSchema),
      z.lazy(() => TagUncheckedUpdateWithoutProductsInputObjectSchema)
    ])
  })
  .strict()

export const TagUpdateWithWhereUniqueWithoutProductsInputObjectSchema = Schema
