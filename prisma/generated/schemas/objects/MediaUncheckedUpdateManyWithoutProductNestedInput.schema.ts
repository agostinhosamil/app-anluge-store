import { z } from 'zod'
import { MediaCreateWithoutProductInputObjectSchema } from './MediaCreateWithoutProductInput.schema'
import { MediaUncheckedCreateWithoutProductInputObjectSchema } from './MediaUncheckedCreateWithoutProductInput.schema'
import { MediaCreateOrConnectWithoutProductInputObjectSchema } from './MediaCreateOrConnectWithoutProductInput.schema'
import { MediaUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './MediaUpsertWithWhereUniqueWithoutProductInput.schema'
import { MediaCreateManyProductInputEnvelopeObjectSchema } from './MediaCreateManyProductInputEnvelope.schema'
import { MediaWhereUniqueInputObjectSchema } from './MediaWhereUniqueInput.schema'
import { MediaUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './MediaUpdateWithWhereUniqueWithoutProductInput.schema'
import { MediaUpdateManyWithWhereWithoutProductInputObjectSchema } from './MediaUpdateManyWithWhereWithoutProductInput.schema'
import { MediaScalarWhereInputObjectSchema } from './MediaScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaUncheckedUpdateManyWithoutProductNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MediaCreateWithoutProductInputObjectSchema),
          z.lazy(() => MediaCreateWithoutProductInputObjectSchema).array(),
          z.lazy(() => MediaUncheckedCreateWithoutProductInputObjectSchema),
          z
            .lazy(() => MediaUncheckedCreateWithoutProductInputObjectSchema)
            .array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MediaCreateOrConnectWithoutProductInputObjectSchema),
          z
            .lazy(() => MediaCreateOrConnectWithoutProductInputObjectSchema)
            .array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => MediaUpsertWithWhereUniqueWithoutProductInputObjectSchema
          ),
          z
            .lazy(
              () => MediaUpsertWithWhereUniqueWithoutProductInputObjectSchema
            )
            .array()
        ])
        .optional(),
      createMany: z
        .lazy(() => MediaCreateManyProductInputEnvelopeObjectSchema)
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
          z.lazy(
            () => MediaUpdateWithWhereUniqueWithoutProductInputObjectSchema
          ),
          z
            .lazy(
              () => MediaUpdateWithWhereUniqueWithoutProductInputObjectSchema
            )
            .array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => MediaUpdateManyWithWhereWithoutProductInputObjectSchema),
          z
            .lazy(() => MediaUpdateManyWithWhereWithoutProductInputObjectSchema)
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

export const MediaUncheckedUpdateManyWithoutProductNestedInputObjectSchema =
  Schema
