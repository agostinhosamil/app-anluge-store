import { z } from 'zod'
import { FavoriteCreateWithoutProductInputObjectSchema } from './FavoriteCreateWithoutProductInput.schema'
import { FavoriteUncheckedCreateWithoutProductInputObjectSchema } from './FavoriteUncheckedCreateWithoutProductInput.schema'
import { FavoriteCreateOrConnectWithoutProductInputObjectSchema } from './FavoriteCreateOrConnectWithoutProductInput.schema'
import { FavoriteUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './FavoriteUpsertWithWhereUniqueWithoutProductInput.schema'
import { FavoriteCreateManyProductInputEnvelopeObjectSchema } from './FavoriteCreateManyProductInputEnvelope.schema'
import { FavoriteWhereUniqueInputObjectSchema } from './FavoriteWhereUniqueInput.schema'
import { FavoriteUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './FavoriteUpdateWithWhereUniqueWithoutProductInput.schema'
import { FavoriteUpdateManyWithWhereWithoutProductInputObjectSchema } from './FavoriteUpdateManyWithWhereWithoutProductInput.schema'
import { FavoriteScalarWhereInputObjectSchema } from './FavoriteScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FavoriteUpdateManyWithoutProductNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => FavoriteUpsertWithWhereUniqueWithoutProductInputObjectSchema
        ),
        z
          .lazy(
            () => FavoriteUpsertWithWhereUniqueWithoutProductInputObjectSchema
          )
          .array()
      ])
      .optional(),
    createMany: z
      .lazy(() => FavoriteCreateManyProductInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => FavoriteWhereUniqueInputObjectSchema),
        z.lazy(() => FavoriteWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => FavoriteWhereUniqueInputObjectSchema),
        z.lazy(() => FavoriteWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => FavoriteWhereUniqueInputObjectSchema),
        z.lazy(() => FavoriteWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => FavoriteWhereUniqueInputObjectSchema),
        z.lazy(() => FavoriteWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => FavoriteUpdateWithWhereUniqueWithoutProductInputObjectSchema
        ),
        z
          .lazy(
            () => FavoriteUpdateWithWhereUniqueWithoutProductInputObjectSchema
          )
          .array()
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => FavoriteUpdateManyWithWhereWithoutProductInputObjectSchema
        ),
        z
          .lazy(
            () => FavoriteUpdateManyWithWhereWithoutProductInputObjectSchema
          )
          .array()
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => FavoriteScalarWhereInputObjectSchema),
        z.lazy(() => FavoriteScalarWhereInputObjectSchema).array()
      ])
      .optional()
  })
  .strict()

export const FavoriteUpdateManyWithoutProductNestedInputObjectSchema = Schema
