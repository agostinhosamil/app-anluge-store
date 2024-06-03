import { z } from 'zod'
import { ProductUpdateWithoutFavoritesInputObjectSchema } from './ProductUpdateWithoutFavoritesInput.schema'
import { ProductUncheckedUpdateWithoutFavoritesInputObjectSchema } from './ProductUncheckedUpdateWithoutFavoritesInput.schema'
import { ProductCreateWithoutFavoritesInputObjectSchema } from './ProductCreateWithoutFavoritesInput.schema'
import { ProductUncheckedCreateWithoutFavoritesInputObjectSchema } from './ProductUncheckedCreateWithoutFavoritesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductUpsertWithoutFavoritesInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutFavoritesInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutFavoritesInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutFavoritesInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutFavoritesInputObjectSchema)
    ])
  })
  .strict()

export const ProductUpsertWithoutFavoritesInputObjectSchema = Schema
