import { z } from 'zod'
import { ProductCreateNestedOneWithoutFavoritesInputObjectSchema } from './ProductCreateNestedOneWithoutFavoritesInput.schema'
import { UserCreateNestedOneWithoutFavoritesInputObjectSchema } from './UserCreateNestedOneWithoutFavoritesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FavoriteCreateInput> = z
  .object({
    product: z.lazy(
      () => ProductCreateNestedOneWithoutFavoritesInputObjectSchema
    ),
    user: z.lazy(() => UserCreateNestedOneWithoutFavoritesInputObjectSchema)
  })
  .strict()

export const FavoriteCreateInputObjectSchema = Schema
