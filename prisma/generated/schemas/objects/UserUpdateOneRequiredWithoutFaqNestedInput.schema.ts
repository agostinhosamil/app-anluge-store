import { z } from 'zod'
import { UserCreateWithoutFaqInputObjectSchema } from './UserCreateWithoutFaqInput.schema'
import { UserUncheckedCreateWithoutFaqInputObjectSchema } from './UserUncheckedCreateWithoutFaqInput.schema'
import { UserCreateOrConnectWithoutFaqInputObjectSchema } from './UserCreateOrConnectWithoutFaqInput.schema'
import { UserUpsertWithoutFaqInputObjectSchema } from './UserUpsertWithoutFaqInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutFaqInputObjectSchema } from './UserUpdateWithoutFaqInput.schema'
import { UserUncheckedUpdateWithoutFaqInputObjectSchema } from './UserUncheckedUpdateWithoutFaqInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutFaqNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutFaqInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutFaqInputObjectSchema)
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutFaqInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutFaqInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutFaqInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutFaqInputObjectSchema)
      ])
      .optional()
  })
  .strict()

export const UserUpdateOneRequiredWithoutFaqNestedInputObjectSchema = Schema
