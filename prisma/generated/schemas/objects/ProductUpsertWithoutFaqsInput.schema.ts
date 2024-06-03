import { z } from 'zod'
import { ProductUpdateWithoutFaqsInputObjectSchema } from './ProductUpdateWithoutFaqsInput.schema'
import { ProductUncheckedUpdateWithoutFaqsInputObjectSchema } from './ProductUncheckedUpdateWithoutFaqsInput.schema'
import { ProductCreateWithoutFaqsInputObjectSchema } from './ProductCreateWithoutFaqsInput.schema'
import { ProductUncheckedCreateWithoutFaqsInputObjectSchema } from './ProductUncheckedCreateWithoutFaqsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductUpsertWithoutFaqsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutFaqsInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutFaqsInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutFaqsInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutFaqsInputObjectSchema)
    ])
  })
  .strict()

export const ProductUpsertWithoutFaqsInputObjectSchema = Schema
