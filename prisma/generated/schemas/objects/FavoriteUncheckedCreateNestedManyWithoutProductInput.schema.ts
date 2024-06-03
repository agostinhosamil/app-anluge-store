import { z } from 'zod'
import { FavoriteCreateWithoutProductInputObjectSchema } from './FavoriteCreateWithoutProductInput.schema'
import { FavoriteUncheckedCreateWithoutProductInputObjectSchema } from './FavoriteUncheckedCreateWithoutProductInput.schema'
import { FavoriteCreateOrConnectWithoutProductInputObjectSchema } from './FavoriteCreateOrConnectWithoutProductInput.schema'
import { FavoriteCreateManyProductInputEnvelopeObjectSchema } from './FavoriteCreateManyProductInputEnvelope.schema'
import { FavoriteWhereUniqueInputObjectSchema } from './FavoriteWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FavoriteUncheckedCreateNestedManyWithoutProductInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FavoriteCreateWithoutProductInputObjectSchema),
          z.lazy(() => FavoriteCreateWithoutProductInputObjectSchema).array(),
          z.lazy(() => FavoriteUncheckedCreateWithoutProductInputObjectSchema),
          z
            .lazy(() => FavoriteUncheckedCreateWithoutProductInputObjectSchema)
            .array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => FavoriteCreateOrConnectWithoutProductInputObjectSchema),
          z
            .lazy(() => FavoriteCreateOrConnectWithoutProductInputObjectSchema)
            .array()
        ])
        .optional(),
      createMany: z
        .lazy(() => FavoriteCreateManyProductInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => FavoriteWhereUniqueInputObjectSchema),
          z.lazy(() => FavoriteWhereUniqueInputObjectSchema).array()
        ])
        .optional()
    })
    .strict()

export const FavoriteUncheckedCreateNestedManyWithoutProductInputObjectSchema =
  Schema
