import { z } from 'zod'
import { FaqCreateWithoutProductInputObjectSchema } from './FaqCreateWithoutProductInput.schema'
import { FaqUncheckedCreateWithoutProductInputObjectSchema } from './FaqUncheckedCreateWithoutProductInput.schema'
import { FaqCreateOrConnectWithoutProductInputObjectSchema } from './FaqCreateOrConnectWithoutProductInput.schema'
import { FaqCreateManyProductInputEnvelopeObjectSchema } from './FaqCreateManyProductInputEnvelope.schema'
import { FaqWhereUniqueInputObjectSchema } from './FaqWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqUncheckedCreateNestedManyWithoutProductInput> =
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
      createMany: z
        .lazy(() => FaqCreateManyProductInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => FaqWhereUniqueInputObjectSchema),
          z.lazy(() => FaqWhereUniqueInputObjectSchema).array()
        ])
        .optional()
    })
    .strict()

export const FaqUncheckedCreateNestedManyWithoutProductInputObjectSchema =
  Schema
