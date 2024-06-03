import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutRoleInputObjectSchema } from './UserUpdateWithoutRoleInput.schema'
import { UserUncheckedUpdateWithoutRoleInputObjectSchema } from './UserUncheckedUpdateWithoutRoleInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutRoleInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => UserUpdateWithoutRoleInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutRoleInputObjectSchema)
    ])
  })
  .strict()

export const UserUpdateWithWhereUniqueWithoutRoleInputObjectSchema = Schema
