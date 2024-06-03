import { z } from 'zod'
import { MediaCreateWithoutRateInputObjectSchema } from './MediaCreateWithoutRateInput.schema'
import { MediaUncheckedCreateWithoutRateInputObjectSchema } from './MediaUncheckedCreateWithoutRateInput.schema'
import { MediaCreateOrConnectWithoutRateInputObjectSchema } from './MediaCreateOrConnectWithoutRateInput.schema'
import { MediaCreateManyRateInputEnvelopeObjectSchema } from './MediaCreateManyRateInputEnvelope.schema'
import { MediaWhereUniqueInputObjectSchema } from './MediaWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaUncheckedCreateNestedManyWithoutRateInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MediaCreateWithoutRateInputObjectSchema),
          z.lazy(() => MediaCreateWithoutRateInputObjectSchema).array(),
          z.lazy(() => MediaUncheckedCreateWithoutRateInputObjectSchema),
          z.lazy(() => MediaUncheckedCreateWithoutRateInputObjectSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MediaCreateOrConnectWithoutRateInputObjectSchema),
          z.lazy(() => MediaCreateOrConnectWithoutRateInputObjectSchema).array()
        ])
        .optional(),
      createMany: z
        .lazy(() => MediaCreateManyRateInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => MediaWhereUniqueInputObjectSchema),
          z.lazy(() => MediaWhereUniqueInputObjectSchema).array()
        ])
        .optional()
    })
    .strict()

export const MediaUncheckedCreateNestedManyWithoutRateInputObjectSchema = Schema
