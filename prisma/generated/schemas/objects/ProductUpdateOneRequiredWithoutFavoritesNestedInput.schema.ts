import { z } from 'zod'
import { ProductCreateWithoutFavoritesInputObjectSchema } from './ProductCreateWithoutFavoritesInput.schema'
import { ProductUncheckedCreateWithoutFavoritesInputObjectSchema } from './ProductUncheckedCreateWithoutFavoritesInput.schema'
import { ProductCreateOrConnectWithoutFavoritesInputObjectSchema } from './ProductCreateOrConnectWithoutFavoritesInput.schema'
import { ProductUpsertWithoutFavoritesInputObjectSchema } from './ProductUpsertWithoutFavoritesInput.schema'
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'
import { ProductUpdateWithoutFavoritesInputObjectSchema } from './ProductUpdateWithoutFavoritesInput.schema'
import { ProductUncheckedUpdateWithoutFavoritesInputObjectSchema } from './ProductUncheckedUpdateWithoutFavoritesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutFavoritesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutFavoritesInputObjectSchema),
          z.lazy(() => ProductUncheckedCreateWithoutFavoritesInputObjectSchema)
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProductCreateOrConnectWithoutFavoritesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ProductUpsertWithoutFavoritesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProductUpdateWithoutFavoritesInputObjectSchema),
          z.lazy(() => ProductUncheckedUpdateWithoutFavoritesInputObjectSchema)
        ])
        .optional()
    })
    .strict()

export const ProductUpdateOneRequiredWithoutFavoritesNestedInputObjectSchema =
  Schema
