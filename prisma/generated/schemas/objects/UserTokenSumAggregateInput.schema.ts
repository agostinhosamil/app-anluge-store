import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserTokenSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional()
  })
  .strict()

export const UserTokenSumAggregateInputObjectSchema = Schema
