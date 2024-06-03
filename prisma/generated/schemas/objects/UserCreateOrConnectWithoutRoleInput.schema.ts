import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutRoleInputObjectSchema } from './UserCreateWithoutRoleInput.schema'
import { UserUncheckedCreateWithoutRoleInputObjectSchema } from './UserUncheckedCreateWithoutRoleInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutRoleInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutRoleInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutRoleInputObjectSchema)
    ])
  })
  .strict()

export const UserCreateOrConnectWithoutRoleInputObjectSchema = Schema
