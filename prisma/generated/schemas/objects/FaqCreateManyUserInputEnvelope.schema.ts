import { z } from 'zod'
import { FaqCreateManyUserInputObjectSchema } from './FaqCreateManyUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => FaqCreateManyUserInputObjectSchema),
      z.lazy(() => FaqCreateManyUserInputObjectSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict()

export const FaqCreateManyUserInputEnvelopeObjectSchema = Schema
