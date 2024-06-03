import { z } from 'zod'
import { RateCreateWithoutUserInputObjectSchema } from './RateCreateWithoutUserInput.schema'
import { RateUncheckedCreateWithoutUserInputObjectSchema } from './RateUncheckedCreateWithoutUserInput.schema'
import { RateCreateOrConnectWithoutUserInputObjectSchema } from './RateCreateOrConnectWithoutUserInput.schema'
import { RateUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './RateUpsertWithWhereUniqueWithoutUserInput.schema'
import { RateCreateManyUserInputEnvelopeObjectSchema } from './RateCreateManyUserInputEnvelope.schema'
import { RateWhereUniqueInputObjectSchema } from './RateWhereUniqueInput.schema'
import { RateUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './RateUpdateWithWhereUniqueWithoutUserInput.schema'
import { RateUpdateManyWithWhereWithoutUserInputObjectSchema } from './RateUpdateManyWithWhereWithoutUserInput.schema'
import { RateScalarWhereInputObjectSchema } from './RateScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RateCreateWithoutUserInputObjectSchema),
          z.lazy(() => RateCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => RateUncheckedCreateWithoutUserInputObjectSchema),
          z.lazy(() => RateUncheckedCreateWithoutUserInputObjectSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RateCreateOrConnectWithoutUserInputObjectSchema),
          z.lazy(() => RateCreateOrConnectWithoutUserInputObjectSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => RateUpsertWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => RateUpsertWithWhereUniqueWithoutUserInputObjectSchema)
            .array()
        ])
        .optional(),
      createMany: z
        .lazy(() => RateCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => RateWhereUniqueInputObjectSchema),
          z.lazy(() => RateWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => RateWhereUniqueInputObjectSchema),
          z.lazy(() => RateWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => RateWhereUniqueInputObjectSchema),
          z.lazy(() => RateWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => RateWhereUniqueInputObjectSchema),
          z.lazy(() => RateWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => RateUpdateWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => RateUpdateWithWhereUniqueWithoutUserInputObjectSchema)
            .array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => RateUpdateManyWithWhereWithoutUserInputObjectSchema),
          z
            .lazy(() => RateUpdateManyWithWhereWithoutUserInputObjectSchema)
            .array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => RateScalarWhereInputObjectSchema),
          z.lazy(() => RateScalarWhereInputObjectSchema).array()
        ])
        .optional()
    })
    .strict()

export const RateUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Schema
