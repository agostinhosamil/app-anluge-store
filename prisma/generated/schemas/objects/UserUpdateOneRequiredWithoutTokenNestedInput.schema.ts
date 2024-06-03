import { z } from 'zod'
import { UserCreateWithoutTokenInputObjectSchema } from './UserCreateWithoutTokenInput.schema'
import { UserUncheckedCreateWithoutTokenInputObjectSchema } from './UserUncheckedCreateWithoutTokenInput.schema'
import { UserCreateOrConnectWithoutTokenInputObjectSchema } from './UserCreateOrConnectWithoutTokenInput.schema'
import { UserUpsertWithoutTokenInputObjectSchema } from './UserUpsertWithoutTokenInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutTokenInputObjectSchema } from './UserUpdateWithoutTokenInput.schema'
import { UserUncheckedUpdateWithoutTokenInputObjectSchema } from './UserUncheckedUpdateWithoutTokenInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTokenNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutTokenInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutTokenInputObjectSchema)
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutTokenInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutTokenInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutTokenInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutTokenInputObjectSchema)
      ])
      .optional()
  })
  .strict()

export const UserUpdateOneRequiredWithoutTokenNestedInputObjectSchema = Schema
