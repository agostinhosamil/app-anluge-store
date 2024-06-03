import { z } from 'zod'
import { UserUpdateOneRequiredWithoutFavoritesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFavoritesNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FavoriteUpdateWithoutProductInput> = z
  .object({
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutFavoritesNestedInputObjectSchema)
      .optional()
  })
  .strict()

export const FavoriteUpdateWithoutProductInputObjectSchema = Schema
