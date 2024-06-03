import { z } from 'zod'
import { ProductUpdateWithoutMediasInputObjectSchema } from './ProductUpdateWithoutMediasInput.schema'
import { ProductUncheckedUpdateWithoutMediasInputObjectSchema } from './ProductUncheckedUpdateWithoutMediasInput.schema'
import { ProductCreateWithoutMediasInputObjectSchema } from './ProductCreateWithoutMediasInput.schema'
import { ProductUncheckedCreateWithoutMediasInputObjectSchema } from './ProductUncheckedCreateWithoutMediasInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductUpsertWithoutMediasInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutMediasInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutMediasInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutMediasInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutMediasInputObjectSchema)
    ])
  })
  .strict()

export const ProductUpsertWithoutMediasInputObjectSchema = Schema
