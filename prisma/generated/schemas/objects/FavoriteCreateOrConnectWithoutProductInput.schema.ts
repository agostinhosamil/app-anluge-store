import { z } from 'zod'
import { FavoriteWhereUniqueInputObjectSchema } from './FavoriteWhereUniqueInput.schema'
import { FavoriteCreateWithoutProductInputObjectSchema } from './FavoriteCreateWithoutProductInput.schema'
import { FavoriteUncheckedCreateWithoutProductInputObjectSchema } from './FavoriteUncheckedCreateWithoutProductInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FavoriteCreateOrConnectWithoutProductInput> = z
  .object({
    where: z.lazy(() => FavoriteWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => FavoriteCreateWithoutProductInputObjectSchema),
      z.lazy(() => FavoriteUncheckedCreateWithoutProductInputObjectSchema)
    ])
  })
  .strict()

export const FavoriteCreateOrConnectWithoutProductInputObjectSchema = Schema
