import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutFaqInputObjectSchema } from './UserCreateWithoutFaqInput.schema'
import { UserUncheckedCreateWithoutFaqInputObjectSchema } from './UserUncheckedCreateWithoutFaqInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutFaqInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutFaqInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutFaqInputObjectSchema)
    ])
  })
  .strict()

export const UserCreateOrConnectWithoutFaqInputObjectSchema = Schema
