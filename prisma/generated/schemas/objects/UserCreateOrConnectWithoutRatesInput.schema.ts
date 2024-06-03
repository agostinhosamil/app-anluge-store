import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutRatesInputObjectSchema } from './UserCreateWithoutRatesInput.schema'
import { UserUncheckedCreateWithoutRatesInputObjectSchema } from './UserUncheckedCreateWithoutRatesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutRatesInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutRatesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutRatesInputObjectSchema)
    ])
  })
  .strict()

export const UserCreateOrConnectWithoutRatesInputObjectSchema = Schema
