import { z } from 'zod'
import { UserCreateWithoutRatesInputObjectSchema } from './UserCreateWithoutRatesInput.schema'
import { UserUncheckedCreateWithoutRatesInputObjectSchema } from './UserUncheckedCreateWithoutRatesInput.schema'
import { UserCreateOrConnectWithoutRatesInputObjectSchema } from './UserCreateOrConnectWithoutRatesInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutRatesInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
  })
  .strict()

export const UserCreateNestedOneWithoutRatesInputObjectSchema = Schema
