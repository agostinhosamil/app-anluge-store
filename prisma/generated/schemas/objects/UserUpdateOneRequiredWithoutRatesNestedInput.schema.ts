import { z } from 'zod'
import { UserCreateWithoutRatesInputObjectSchema } from './UserCreateWithoutRatesInput.schema'
import { UserUncheckedCreateWithoutRatesInputObjectSchema } from './UserUncheckedCreateWithoutRatesInput.schema'
import { UserCreateOrConnectWithoutRatesInputObjectSchema } from './UserCreateOrConnectWithoutRatesInput.schema'
import { UserUpsertWithoutRatesInputObjectSchema } from './UserUpsertWithoutRatesInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutRatesInputObjectSchema } from './UserUpdateWithoutRatesInput.schema'
import { UserUncheckedUpdateWithoutRatesInputObjectSchema } from './UserUncheckedUpdateWithoutRatesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutRatesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutRatesInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutRatesInputObjectSchema)
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutRatesInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutRatesInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutRatesInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutRatesInputObjectSchema)
      ])
      .optional()
  })
  .strict()

export const UserUpdateOneRequiredWithoutRatesNestedInputObjectSchema = Schema
