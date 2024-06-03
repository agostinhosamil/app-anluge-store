import { z } from 'zod'
import { ProductUpdateOneRequiredWithoutFavoritesNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutFavoritesNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FavoriteUpdateWithoutUserInput> = z
  .object({
    product: z
      .lazy(
        () => ProductUpdateOneRequiredWithoutFavoritesNestedInputObjectSchema
      )
      .optional()
  })
  .strict()

export const FavoriteUpdateWithoutUserInputObjectSchema = Schema
