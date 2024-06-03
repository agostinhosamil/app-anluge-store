import { z } from 'zod'
import { RateCreateWithoutUserInputObjectSchema } from './RateCreateWithoutUserInput.schema'
import { RateUncheckedCreateWithoutUserInputObjectSchema } from './RateUncheckedCreateWithoutUserInput.schema'
import { RateCreateOrConnectWithoutUserInputObjectSchema } from './RateCreateOrConnectWithoutUserInput.schema'
import { RateCreateManyUserInputEnvelopeObjectSchema } from './RateCreateManyUserInputEnvelope.schema'
import { RateWhereUniqueInputObjectSchema } from './RateWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateCreateNestedManyWithoutUserInput> = z
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
    createMany: z
      .lazy(() => RateCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => RateWhereUniqueInputObjectSchema),
        z.lazy(() => RateWhereUniqueInputObjectSchema).array()
      ])
      .optional()
  })
  .strict()

export const RateCreateNestedManyWithoutUserInputObjectSchema = Schema
