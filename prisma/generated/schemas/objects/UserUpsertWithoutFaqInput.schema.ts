import { z } from 'zod'
import { UserUpdateWithoutFaqInputObjectSchema } from './UserUpdateWithoutFaqInput.schema'
import { UserUncheckedUpdateWithoutFaqInputObjectSchema } from './UserUncheckedUpdateWithoutFaqInput.schema'
import { UserCreateWithoutFaqInputObjectSchema } from './UserCreateWithoutFaqInput.schema'
import { UserUncheckedCreateWithoutFaqInputObjectSchema } from './UserUncheckedCreateWithoutFaqInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutFaqInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutFaqInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutFaqInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutFaqInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutFaqInputObjectSchema)
    ])
  })
  .strict()

export const UserUpsertWithoutFaqInputObjectSchema = Schema
