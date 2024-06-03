import { z } from 'zod'
import { UserTokenCreateWithoutUserInputObjectSchema } from './UserTokenCreateWithoutUserInput.schema'
import { UserTokenUncheckedCreateWithoutUserInputObjectSchema } from './UserTokenUncheckedCreateWithoutUserInput.schema'
import { UserTokenCreateOrConnectWithoutUserInputObjectSchema } from './UserTokenCreateOrConnectWithoutUserInput.schema'
import { UserTokenCreateManyUserInputEnvelopeObjectSchema } from './UserTokenCreateManyUserInputEnvelope.schema'
import { UserTokenWhereUniqueInputObjectSchema } from './UserTokenWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserTokenCreateNestedManyWithoutUserInput> = z
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
    createMany: z
      .lazy(() => UserTokenCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => UserTokenWhereUniqueInputObjectSchema),
        z.lazy(() => UserTokenWhereUniqueInputObjectSchema).array()
      ])
      .optional()
  })
  .strict()

export const UserTokenCreateNestedManyWithoutUserInputObjectSchema = Schema
