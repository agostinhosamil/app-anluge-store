import { z } from 'zod'
import { ProductCreateNestedOneWithoutFavoritesInputObjectSchema } from './ProductCreateNestedOneWithoutFavoritesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FavoriteCreateWithoutUserInput> = z
  .object({
    product: z.lazy(
      () => ProductCreateNestedOneWithoutFavoritesInputObjectSchema
    )
  })
  .strict()

export const FavoriteCreateWithoutUserInputObjectSchema = Schema
