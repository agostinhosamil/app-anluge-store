import { z } from 'zod'
import { MediaCreateManyProductInputObjectSchema } from './MediaCreateManyProductInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaCreateManyProductInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MediaCreateManyProductInputObjectSchema),
      z.lazy(() => MediaCreateManyProductInputObjectSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict()

export const MediaCreateManyProductInputEnvelopeObjectSchema = Schema
