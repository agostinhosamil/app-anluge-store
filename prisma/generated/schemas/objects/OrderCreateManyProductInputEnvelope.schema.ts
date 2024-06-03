import { z } from 'zod'
import { OrderCreateManyProductInputObjectSchema } from './OrderCreateManyProductInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrderCreateManyProductInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => OrderCreateManyProductInputObjectSchema),
      z.lazy(() => OrderCreateManyProductInputObjectSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict()

export const OrderCreateManyProductInputEnvelopeObjectSchema = Schema
