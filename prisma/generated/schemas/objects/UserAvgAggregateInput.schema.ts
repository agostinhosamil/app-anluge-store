import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserAvgAggregateInputType> = z
  .object({
    roleId: z.literal(true).optional()
  })
  .strict()

export const UserAvgAggregateInputObjectSchema = Schema
