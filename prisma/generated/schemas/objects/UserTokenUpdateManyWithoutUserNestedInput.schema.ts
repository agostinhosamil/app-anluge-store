import { z } from 'zod'
import { UserTokenCreateWithoutUserInputObjectSchema } from './UserTokenCreateWithoutUserInput.schema'
import { UserTokenUncheckedCreateWithoutUserInputObjectSchema } from './UserTokenUncheckedCreateWithoutUserInput.schema'
import { UserTokenCreateOrConnectWithoutUserInputObjectSchema } from './UserTokenCreateOrConnectWithoutUserInput.schema'
import { UserTokenUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './UserTokenUpsertWithWhereUniqueWithoutUserInput.schema'
import { UserTokenCreateManyUserInputEnvelopeObjectSchema } from './UserTokenCreateManyUserInputEnvelope.schema'
import { UserTokenWhereUniqueInputObjectSchema } from './UserTokenWhereUniqueInput.schema'
import { UserTokenUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './UserTokenUpdateWithWhereUniqueWithoutUserInput.schema'
import { UserTokenUpdateManyWithWhereWithoutUserInputObjectSchema } from './UserTokenUpdateManyWithWhereWithoutUserInput.schema'
import { UserTokenScalarWhereInputObjectSchema } from './UserTokenScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserTokenUpdateManyWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserTokenCreateWithoutUserInputObjectSchema),
        z.lazy(() => UserTokenCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => UserTokenUncheckedCreateWithoutUserInputObjectSchema),
        z
          .lazy(() => UserTokenUncheckedCreateWithoutUserInputObjectSchema)
          .array()
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => UserTokenCreateOrConnectWithoutUserInputObjectSchema),
        z
          .lazy(() => UserTokenCreateOrConnectWithoutUserInputObjectSchema)
          .array()
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => UserTokenUpsertWithWhereUniqueWithoutUserInputObjectSchema
        ),
        z
          .lazy(
            () => UserTokenUpsertWithWhereUniqueWithoutUserInputObjectSchema
          )
          .array()
      ])
      .optional(),
    createMany: z
      .lazy(() => UserTokenCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => UserTokenWhereUniqueInputObjectSchema),
        z.lazy(() => UserTokenWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => UserTokenWhereUniqueInputObjectSchema),
        z.lazy(() => UserTokenWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => UserTokenWhereUniqueInputObjectSchema),
        z.lazy(() => UserTokenWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => UserTokenWhereUniqueInputObjectSchema),
        z.lazy(() => UserTokenWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => UserTokenUpdateWithWhereUniqueWithoutUserInputObjectSchema
        ),
        z
          .lazy(
            () => UserTokenUpdateWithWhereUniqueWithoutUserInputObjectSchema
          )
          .array()
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => UserTokenUpdateManyWithWhereWithoutUserInputObjectSchema),
        z
          .lazy(() => UserTokenUpdateManyWithWhereWithoutUserInputObjectSchema)
          .array()
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => UserTokenScalarWhereInputObjectSchema),
        z.lazy(() => UserTokenScalarWhereInputObjectSchema).array()
      ])
      .optional()
  })
  .strict()

export const UserTokenUpdateManyWithoutUserNestedInputObjectSchema = Schema
