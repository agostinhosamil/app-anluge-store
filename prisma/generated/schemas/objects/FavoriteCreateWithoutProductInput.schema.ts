import { z } from 'zod'
import { UserCreateNestedOneWithoutFavoritesInputObjectSchema } from './UserCreateNestedOneWithoutFavoritesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FavoriteCreateWithoutProductInput> = z
  .object({
    user: z.lazy(() => UserCreateNestedOneWithoutFavoritesInputObjectSchema)
  })
  .strict()

export const FavoriteCreateWithoutProductInputObjectSchema = Schema
