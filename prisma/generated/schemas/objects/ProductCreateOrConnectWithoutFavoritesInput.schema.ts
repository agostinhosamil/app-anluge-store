import { z } from 'zod'
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'
import { ProductCreateWithoutFavoritesInputObjectSchema } from './ProductCreateWithoutFavoritesInput.schema'
import { ProductUncheckedCreateWithoutFavoritesInputObjectSchema } from './ProductUncheckedCreateWithoutFavoritesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutFavoritesInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutFavoritesInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutFavoritesInputObjectSchema)
    ])
  })
  .strict()

export const ProductCreateOrConnectWithoutFavoritesInputObjectSchema = Schema
