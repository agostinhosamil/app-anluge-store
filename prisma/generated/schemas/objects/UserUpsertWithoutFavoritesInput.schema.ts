import { z } from 'zod'
import { UserUpdateWithoutFavoritesInputObjectSchema } from './UserUpdateWithoutFavoritesInput.schema'
import { UserUncheckedUpdateWithoutFavoritesInputObjectSchema } from './UserUncheckedUpdateWithoutFavoritesInput.schema'
import { UserCreateWithoutFavoritesInputObjectSchema } from './UserCreateWithoutFavoritesInput.schema'
import { UserUncheckedCreateWithoutFavoritesInputObjectSchema } from './UserUncheckedCreateWithoutFavoritesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutFavoritesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutFavoritesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutFavoritesInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutFavoritesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutFavoritesInputObjectSchema)
    ])
  })
  .strict()

export const UserUpsertWithoutFavoritesInputObjectSchema = Schema
