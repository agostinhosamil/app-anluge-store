import { z } from 'zod'
import { UserCreateWithoutRoleInputObjectSchema } from './UserCreateWithoutRoleInput.schema'
import { UserUncheckedCreateWithoutRoleInputObjectSchema } from './UserUncheckedCreateWithoutRoleInput.schema'
import { UserCreateOrConnectWithoutRoleInputObjectSchema } from './UserCreateOrConnectWithoutRoleInput.schema'
import { UserCreateManyRoleInputEnvelopeObjectSchema } from './UserCreateManyRoleInputEnvelope.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedManyWithoutRoleInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutRoleInputObjectSchema),
        z.lazy(() => UserCreateWithoutRoleInputObjectSchema).array(),
        z.lazy(() => UserUncheckedCreateWithoutRoleInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutRoleInputObjectSchema).array()
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => UserCreateOrConnectWithoutRoleInputObjectSchema),
        z.lazy(() => UserCreateOrConnectWithoutRoleInputObjectSchema).array()
      ])
      .optional(),
    createMany: z
      .lazy(() => UserCreateManyRoleInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array()
      ])
      .optional()
  })
  .strict()

export const UserCreateNestedManyWithoutRoleInputObjectSchema = Schema
