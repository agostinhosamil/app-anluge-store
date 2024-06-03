import { z } from 'zod'
import { UserUpdateWithoutRatesInputObjectSchema } from './UserUpdateWithoutRatesInput.schema'
import { UserUncheckedUpdateWithoutRatesInputObjectSchema } from './UserUncheckedUpdateWithoutRatesInput.schema'
import { UserCreateWithoutRatesInputObjectSchema } from './UserCreateWithoutRatesInput.schema'
import { UserUncheckedCreateWithoutRatesInputObjectSchema } from './UserUncheckedCreateWithoutRatesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutRatesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutRatesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutRatesInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutRatesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutRatesInputObjectSchema)
    ])
  })
  .strict()

export const UserUpsertWithoutRatesInputObjectSchema = Schema
