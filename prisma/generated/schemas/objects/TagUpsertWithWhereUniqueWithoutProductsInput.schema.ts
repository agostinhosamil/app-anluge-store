import { z } from 'zod'
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema'
import { TagUpdateWithoutProductsInputObjectSchema } from './TagUpdateWithoutProductsInput.schema'
import { TagUncheckedUpdateWithoutProductsInputObjectSchema } from './TagUncheckedUpdateWithoutProductsInput.schema'
import { TagCreateWithoutProductsInputObjectSchema } from './TagCreateWithoutProductsInput.schema'
import { TagUncheckedCreateWithoutProductsInputObjectSchema } from './TagUncheckedCreateWithoutProductsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutProductsInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TagUpdateWithoutProductsInputObjectSchema),
      z.lazy(() => TagUncheckedUpdateWithoutProductsInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => TagCreateWithoutProductsInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutProductsInputObjectSchema)
    ])
  })
  .strict()

export const TagUpsertWithWhereUniqueWithoutProductsInputObjectSchema = Schema
