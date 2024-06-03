import { z } from 'zod'
import { UserCreateWithoutRoleInputObjectSchema } from './UserCreateWithoutRoleInput.schema'
import { UserUncheckedCreateWithoutRoleInputObjectSchema } from './UserUncheckedCreateWithoutRoleInput.schema'
import { UserCreateOrConnectWithoutRoleInputObjectSchema } from './UserCreateOrConnectWithoutRoleInput.schema'
import { UserUpsertWithWhereUniqueWithoutRoleInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutRoleInput.schema'
import { UserCreateManyRoleInputEnvelopeObjectSchema } from './UserCreateManyRoleInputEnvelope.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithWhereUniqueWithoutRoleInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutRoleInput.schema'
import { UserUpdateManyWithWhereWithoutRoleInputObjectSchema } from './UserUpdateManyWithWhereWithoutRoleInput.schema'
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateManyWithoutRoleNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => UserUpsertWithWhereUniqueWithoutRoleInputObjectSchema),
        z
          .lazy(() => UserUpsertWithWhereUniqueWithoutRoleInputObjectSchema)
          .array()
      ])
      .optional(),
    createMany: z
      .lazy(() => UserCreateManyRoleInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithWhereUniqueWithoutRoleInputObjectSchema),
        z
          .lazy(() => UserUpdateWithWhereUniqueWithoutRoleInputObjectSchema)
          .array()
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => UserUpdateManyWithWhereWithoutRoleInputObjectSchema),
        z
          .lazy(() => UserUpdateManyWithWhereWithoutRoleInputObjectSchema)
          .array()
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => UserScalarWhereInputObjectSchema),
        z.lazy(() => UserScalarWhereInputObjectSchema).array()
      ])
      .optional()
  })
  .strict()

export const UserUpdateManyWithoutRoleNestedInputObjectSchema = Schema
