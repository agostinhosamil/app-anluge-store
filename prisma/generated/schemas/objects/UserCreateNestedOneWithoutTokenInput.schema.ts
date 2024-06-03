import { z } from 'zod'
import { UserCreateWithoutTokenInputObjectSchema } from './UserCreateWithoutTokenInput.schema'
import { UserUncheckedCreateWithoutTokenInputObjectSchema } from './UserUncheckedCreateWithoutTokenInput.schema'
import { UserCreateOrConnectWithoutTokenInputObjectSchema } from './UserCreateOrConnectWithoutTokenInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutTokenInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
  })
  .strict()

export const UserCreateNestedOneWithoutTokenInputObjectSchema = Schema
