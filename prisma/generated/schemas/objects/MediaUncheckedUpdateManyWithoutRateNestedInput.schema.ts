import { z } from 'zod'
import { MediaCreateWithoutRateInputObjectSchema } from './MediaCreateWithoutRateInput.schema'
import { MediaUncheckedCreateWithoutRateInputObjectSchema } from './MediaUncheckedCreateWithoutRateInput.schema'
import { MediaCreateOrConnectWithoutRateInputObjectSchema } from './MediaCreateOrConnectWithoutRateInput.schema'
import { MediaUpsertWithWhereUniqueWithoutRateInputObjectSchema } from './MediaUpsertWithWhereUniqueWithoutRateInput.schema'
import { MediaCreateManyRateInputEnvelopeObjectSchema } from './MediaCreateManyRateInputEnvelope.schema'
import { MediaWhereUniqueInputObjectSchema } from './MediaWhereUniqueInput.schema'
import { MediaUpdateWithWhereUniqueWithoutRateInputObjectSchema } from './MediaUpdateWithWhereUniqueWithoutRateInput.schema'
import { MediaUpdateManyWithWhereWithoutRateInputObjectSchema } from './MediaUpdateManyWithWhereWithoutRateInput.schema'
import { MediaScalarWhereInputObjectSchema } from './MediaScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaUncheckedUpdateManyWithoutRateNestedInput> =
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
      upsert: z
        .union([
          z.lazy(() => MediaUpsertWithWhereUniqueWithoutRateInputObjectSchema),
          z
            .lazy(() => MediaUpsertWithWhereUniqueWithoutRateInputObjectSchema)
            .array()
        ])
        .optional(),
      createMany: z
        .lazy(() => MediaCreateManyRateInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => MediaWhereUniqueInputObjectSchema),
          z.lazy(() => MediaWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MediaWhereUniqueInputObjectSchema),
          z.lazy(() => MediaWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MediaWhereUniqueInputObjectSchema),
          z.lazy(() => MediaWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MediaWhereUniqueInputObjectSchema),
          z.lazy(() => MediaWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => MediaUpdateWithWhereUniqueWithoutRateInputObjectSchema),
          z
            .lazy(() => MediaUpdateWithWhereUniqueWithoutRateInputObjectSchema)
            .array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => MediaUpdateManyWithWhereWithoutRateInputObjectSchema),
          z
            .lazy(() => MediaUpdateManyWithWhereWithoutRateInputObjectSchema)
            .array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MediaScalarWhereInputObjectSchema),
          z.lazy(() => MediaScalarWhereInputObjectSchema).array()
        ])
        .optional()
    })
    .strict()

export const MediaUncheckedUpdateManyWithoutRateNestedInputObjectSchema = Schema
