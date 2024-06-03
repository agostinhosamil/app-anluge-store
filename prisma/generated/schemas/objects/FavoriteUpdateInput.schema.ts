import { z } from 'zod'
import { ProductUpdateOneRequiredWithoutFavoritesNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutFavoritesNestedInput.schema'
import { UserUpdateOneRequiredWithoutFavoritesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFavoritesNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FavoriteUpdateInput> = z
  .object({
    product: z
      .lazy(
        () => ProductUpdateOneRequiredWithoutFavoritesNestedInputObjectSchema
      )
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutFavoritesNestedInputObjectSchema)
      .optional()
  })
  .strict()

export const FavoriteUpdateInputObjectSchema = Schema
