import { z } from 'zod'
import { FavoriteWhereUniqueInputObjectSchema } from './FavoriteWhereUniqueInput.schema'
import { FavoriteUpdateWithoutProductInputObjectSchema } from './FavoriteUpdateWithoutProductInput.schema'
import { FavoriteUncheckedUpdateWithoutProductInputObjectSchema } from './FavoriteUncheckedUpdateWithoutProductInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FavoriteUpdateWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => FavoriteWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => FavoriteUpdateWithoutProductInputObjectSchema),
        z.lazy(() => FavoriteUncheckedUpdateWithoutProductInputObjectSchema)
      ])
    })
    .strict()

export const FavoriteUpdateWithWhereUniqueWithoutProductInputObjectSchema =
  Schema
