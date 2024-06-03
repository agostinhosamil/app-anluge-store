import { z } from 'zod'
import { FavoriteWhereUniqueInputObjectSchema } from './FavoriteWhereUniqueInput.schema'
import { FavoriteUpdateWithoutProductInputObjectSchema } from './FavoriteUpdateWithoutProductInput.schema'
import { FavoriteUncheckedUpdateWithoutProductInputObjectSchema } from './FavoriteUncheckedUpdateWithoutProductInput.schema'
import { FavoriteCreateWithoutProductInputObjectSchema } from './FavoriteCreateWithoutProductInput.schema'
import { FavoriteUncheckedCreateWithoutProductInputObjectSchema } from './FavoriteUncheckedCreateWithoutProductInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FavoriteUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => FavoriteWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => FavoriteUpdateWithoutProductInputObjectSchema),
        z.lazy(() => FavoriteUncheckedUpdateWithoutProductInputObjectSchema)
      ]),
      create: z.union([
        z.lazy(() => FavoriteCreateWithoutProductInputObjectSchema),
        z.lazy(() => FavoriteUncheckedCreateWithoutProductInputObjectSchema)
      ])
    })
    .strict()

export const FavoriteUpsertWithWhereUniqueWithoutProductInputObjectSchema =
  Schema
