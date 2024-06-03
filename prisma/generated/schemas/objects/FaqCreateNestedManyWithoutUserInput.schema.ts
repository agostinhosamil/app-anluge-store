import { z } from 'zod'
import { FaqCreateWithoutUserInputObjectSchema } from './FaqCreateWithoutUserInput.schema'
import { FaqUncheckedCreateWithoutUserInputObjectSchema } from './FaqUncheckedCreateWithoutUserInput.schema'
import { FaqCreateOrConnectWithoutUserInputObjectSchema } from './FaqCreateOrConnectWithoutUserInput.schema'
import { FaqCreateManyUserInputEnvelopeObjectSchema } from './FaqCreateManyUserInputEnvelope.schema'
import { FaqWhereUniqueInputObjectSchema } from './FaqWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => FaqCreateWithoutUserInputObjectSchema),
        z.lazy(() => FaqCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => FaqUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => FaqUncheckedCreateWithoutUserInputObjectSchema).array()
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => FaqCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => FaqCreateOrConnectWithoutUserInputObjectSchema).array()
      ])
      .optional(),
    createMany: z
      .lazy(() => FaqCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => FaqWhereUniqueInputObjectSchema),
        z.lazy(() => FaqWhereUniqueInputObjectSchema).array()
      ])
      .optional()
  })
  .strict()

export const FaqCreateNestedManyWithoutUserInputObjectSchema = Schema
