import { z } from 'zod'
import { UserUpdateWithoutTokenInputObjectSchema } from './UserUpdateWithoutTokenInput.schema'
import { UserUncheckedUpdateWithoutTokenInputObjectSchema } from './UserUncheckedUpdateWithoutTokenInput.schema'
import { UserCreateWithoutTokenInputObjectSchema } from './UserCreateWithoutTokenInput.schema'
import { UserUncheckedCreateWithoutTokenInputObjectSchema } from './UserUncheckedCreateWithoutTokenInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutTokenInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutTokenInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutTokenInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutTokenInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutTokenInputObjectSchema)
    ])
  })
  .strict()

export const UserUpsertWithoutTokenInputObjectSchema = Schema
