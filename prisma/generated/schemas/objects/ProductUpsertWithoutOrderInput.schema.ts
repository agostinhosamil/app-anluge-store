import { z } from 'zod'
import { ProductUpdateWithoutOrderInputObjectSchema } from './ProductUpdateWithoutOrderInput.schema'
import { ProductUncheckedUpdateWithoutOrderInputObjectSchema } from './ProductUncheckedUpdateWithoutOrderInput.schema'
import { ProductCreateWithoutOrderInputObjectSchema } from './ProductCreateWithoutOrderInput.schema'
import { ProductUncheckedCreateWithoutOrderInputObjectSchema } from './ProductUncheckedCreateWithoutOrderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductUpsertWithoutOrderInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutOrderInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutOrderInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutOrderInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutOrderInputObjectSchema)
    ])
  })
  .strict()

export const ProductUpsertWithoutOrderInputObjectSchema = Schema
