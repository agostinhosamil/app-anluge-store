import { z } from 'zod'
import { OrderCreateManyCartInputObjectSchema } from './OrderCreateManyCartInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrderCreateManyCartInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => OrderCreateManyCartInputObjectSchema),
      z.lazy(() => OrderCreateManyCartInputObjectSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict()

export const OrderCreateManyCartInputEnvelopeObjectSchema = Schema
