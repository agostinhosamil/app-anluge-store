import { z } from 'zod'
import { FaqCreateWithoutProductInputObjectSchema } from './FaqCreateWithoutProductInput.schema'
import { FaqUncheckedCreateWithoutProductInputObjectSchema } from './FaqUncheckedCreateWithoutProductInput.schema'
import { FaqCreateOrConnectWithoutProductInputObjectSchema } from './FaqCreateOrConnectWithoutProductInput.schema'
import { FaqUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './FaqUpsertWithWhereUniqueWithoutProductInput.schema'
import { FaqCreateManyProductInputEnvelopeObjectSchema } from './FaqCreateManyProductInputEnvelope.schema'
import { FaqWhereUniqueInputObjectSchema } from './FaqWhereUniqueInput.schema'
import { FaqUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './FaqUpdateWithWhereUniqueWithoutProductInput.schema'
import { FaqUpdateManyWithWhereWithoutProductInputObjectSchema } from './FaqUpdateManyWithWhereWithoutProductInput.schema'
import { FaqScalarWhereInputObjectSchema } from './FaqScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqUncheckedUpdateManyWithoutProductNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FaqCreateWithoutProductInputObjectSchema),
          z.lazy(() => FaqCreateWithoutProductInputObjectSchema).array(),
          z.lazy(() => FaqUncheckedCreateWithoutProductInputObjectSchema),
          z
            .lazy(() => FaqUncheckedCreateWithoutProductInputObjectSchema)
            .array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FaqCreateOrConnectWithoutProductInputObjectSchema),
          z
            .lazy(() => FaqCreateOrConnectWithoutProductInputObjectSchema)
            .array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => FaqUpsertWithWhereUniqueWithoutProductInputObjectSchema),
          z
            .lazy(() => FaqUpsertWithWhereUniqueWithoutProductInputObjectSchema)
            .array()
        ])
        .optional(),
      createMany: z
        .lazy(() => FaqCreateManyProductInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => FaqWhereUniqueInputObjectSchema),
          z.lazy(() => FaqWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FaqWhereUniqueInputObjectSchema),
          z.lazy(() => FaqWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FaqWhereUniqueInputObjectSchema),
          z.lazy(() => FaqWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FaqWhereUniqueInputObjectSchema),
          z.lazy(() => FaqWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => FaqUpdateWithWhereUniqueWithoutProductInputObjectSchema),
          z
            .lazy(() => FaqUpdateWithWhereUniqueWithoutProductInputObjectSchema)
            .array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => FaqUpdateManyWithWhereWithoutProductInputObjectSchema),
          z
            .lazy(() => FaqUpdateManyWithWhereWithoutProductInputObjectSchema)
            .array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FaqScalarWhereInputObjectSchema),
          z.lazy(() => FaqScalarWhereInputObjectSchema).array()
        ])
        .optional()
    })
    .strict()

export const FaqUncheckedUpdateManyWithoutProductNestedInputObjectSchema =
  Schema
