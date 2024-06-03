import { z } from 'zod'
import { RateCreateManyUserInputObjectSchema } from './RateCreateManyUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => RateCreateManyUserInputObjectSchema),
      z.lazy(() => RateCreateManyUserInputObjectSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict()

export const RateCreateManyUserInputEnvelopeObjectSchema = Schema
