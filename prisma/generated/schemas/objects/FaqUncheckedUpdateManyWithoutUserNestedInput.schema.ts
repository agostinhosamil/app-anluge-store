import { z } from 'zod'
import { FaqCreateWithoutUserInputObjectSchema } from './FaqCreateWithoutUserInput.schema'
import { FaqUncheckedCreateWithoutUserInputObjectSchema } from './FaqUncheckedCreateWithoutUserInput.schema'
import { FaqCreateOrConnectWithoutUserInputObjectSchema } from './FaqCreateOrConnectWithoutUserInput.schema'
import { FaqUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './FaqUpsertWithWhereUniqueWithoutUserInput.schema'
import { FaqCreateManyUserInputEnvelopeObjectSchema } from './FaqCreateManyUserInputEnvelope.schema'
import { FaqWhereUniqueInputObjectSchema } from './FaqWhereUniqueInput.schema'
import { FaqUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './FaqUpdateWithWhereUniqueWithoutUserInput.schema'
import { FaqUpdateManyWithWhereWithoutUserInputObjectSchema } from './FaqUpdateManyWithWhereWithoutUserInput.schema'
import { FaqScalarWhereInputObjectSchema } from './FaqScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqUncheckedUpdateManyWithoutUserNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => FaqUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => FaqUpsertWithWhereUniqueWithoutUserInputObjectSchema)
          .array()
      ])
      .optional(),
    createMany: z
      .lazy(() => FaqCreateManyUserInputEnvelopeObjectSchema)
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
        z.lazy(() => FaqUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => FaqUpdateWithWhereUniqueWithoutUserInputObjectSchema)
          .array()
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => FaqUpdateManyWithWhereWithoutUserInputObjectSchema),
        z.lazy(() => FaqUpdateManyWithWhereWithoutUserInputObjectSchema).array()
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

export const FaqUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Schema
