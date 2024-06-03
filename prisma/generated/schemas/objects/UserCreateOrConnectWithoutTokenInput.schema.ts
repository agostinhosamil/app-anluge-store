import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutTokenInputObjectSchema } from './UserCreateWithoutTokenInput.schema'
import { UserUncheckedCreateWithoutTokenInputObjectSchema } from './UserUncheckedCreateWithoutTokenInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutTokenInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutTokenInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutTokenInputObjectSchema)
    ])
  })
  .strict()

export const UserCreateOrConnectWithoutTokenInputObjectSchema = Schema
