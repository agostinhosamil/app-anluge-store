import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutRoleInputObjectSchema } from './UserUpdateWithoutRoleInput.schema'
import { UserUncheckedUpdateWithoutRoleInputObjectSchema } from './UserUncheckedUpdateWithoutRoleInput.schema'
import { UserCreateWithoutRoleInputObjectSchema } from './UserCreateWithoutRoleInput.schema'
import { UserUncheckedCreateWithoutRoleInputObjectSchema } from './UserUncheckedCreateWithoutRoleInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutRoleInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => UserUpdateWithoutRoleInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutRoleInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutRoleInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutRoleInputObjectSchema)
    ])
  })
  .strict()

export const UserUpsertWithWhereUniqueWithoutRoleInputObjectSchema = Schema
