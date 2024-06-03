import { z } from 'zod'
import { FavoriteCreateManyProductInputObjectSchema } from './FavoriteCreateManyProductInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FavoriteCreateManyProductInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => FavoriteCreateManyProductInputObjectSchema),
      z.lazy(() => FavoriteCreateManyProductInputObjectSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict()

export const FavoriteCreateManyProductInputEnvelopeObjectSchema = Schema
