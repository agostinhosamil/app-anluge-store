import { z } from 'zod'
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'
import { ProductUpdateWithoutTagsInputObjectSchema } from './ProductUpdateWithoutTagsInput.schema'
import { ProductUncheckedUpdateWithoutTagsInputObjectSchema } from './ProductUncheckedUpdateWithoutTagsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutTagsInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ProductUpdateWithoutTagsInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutTagsInputObjectSchema)
    ])
  })
  .strict()

export const ProductUpdateWithWhereUniqueWithoutTagsInputObjectSchema = Schema
