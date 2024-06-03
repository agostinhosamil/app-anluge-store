import { z } from 'zod'
import { MediaCreateManyRateInputObjectSchema } from './MediaCreateManyRateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaCreateManyRateInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MediaCreateManyRateInputObjectSchema),
      z.lazy(() => MediaCreateManyRateInputObjectSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict()

export const MediaCreateManyRateInputEnvelopeObjectSchema = Schema
