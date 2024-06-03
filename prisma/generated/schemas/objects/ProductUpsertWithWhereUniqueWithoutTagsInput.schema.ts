import { z } from 'zod'
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'
import { ProductUpdateWithoutTagsInputObjectSchema } from './ProductUpdateWithoutTagsInput.schema'
import { ProductUncheckedUpdateWithoutTagsInputObjectSchema } from './ProductUncheckedUpdateWithoutTagsInput.schema'
import { ProductCreateWithoutTagsInputObjectSchema } from './ProductCreateWithoutTagsInput.schema'
import { ProductUncheckedCreateWithoutTagsInputObjectSchema } from './ProductUncheckedCreateWithoutTagsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutTagsInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ProductUpdateWithoutTagsInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutTagsInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutTagsInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutTagsInputObjectSchema)
    ])
  })
  .strict()

export const ProductUpsertWithWhereUniqueWithoutTagsInputObjectSchema = Schema
