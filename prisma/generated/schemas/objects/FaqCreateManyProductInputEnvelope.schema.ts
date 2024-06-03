import { z } from 'zod'
import { FaqCreateManyProductInputObjectSchema } from './FaqCreateManyProductInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqCreateManyProductInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => FaqCreateManyProductInputObjectSchema),
      z.lazy(() => FaqCreateManyProductInputObjectSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict()

export const FaqCreateManyProductInputEnvelopeObjectSchema = Schema
