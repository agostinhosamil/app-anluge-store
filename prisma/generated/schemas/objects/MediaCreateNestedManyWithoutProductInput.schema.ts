import { z } from 'zod'
import { MediaCreateWithoutProductInputObjectSchema } from './MediaCreateWithoutProductInput.schema'
import { MediaUncheckedCreateWithoutProductInputObjectSchema } from './MediaUncheckedCreateWithoutProductInput.schema'
import { MediaCreateOrConnectWithoutProductInputObjectSchema } from './MediaCreateOrConnectWithoutProductInput.schema'
import { MediaCreateManyProductInputEnvelopeObjectSchema } from './MediaCreateManyProductInputEnvelope.schema'
import { MediaWhereUniqueInputObjectSchema } from './MediaWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaCreateNestedManyWithoutProductInput> = z
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
    createMany: z
      .lazy(() => MediaCreateManyProductInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => MediaWhereUniqueInputObjectSchema),
        z.lazy(() => MediaWhereUniqueInputObjectSchema).array()
      ])
      .optional()
  })
  .strict()

export const MediaCreateNestedManyWithoutProductInputObjectSchema = Schema
