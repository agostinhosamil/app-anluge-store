import { z } from 'zod'
import { ProductCreateWithoutFavoritesInputObjectSchema } from './ProductCreateWithoutFavoritesInput.schema'
import { ProductUncheckedCreateWithoutFavoritesInputObjectSchema } from './ProductUncheckedCreateWithoutFavoritesInput.schema'
import { ProductCreateOrConnectWithoutFavoritesInputObjectSchema } from './ProductCreateOrConnectWithoutFavoritesInput.schema'
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutFavoritesInput> = z
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
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
  })
  .strict()

export const ProductCreateNestedOneWithoutFavoritesInputObjectSchema = Schema
