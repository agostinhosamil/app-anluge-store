import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AdvertisingCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    expiresAt: z.literal(true).optional(),
    banner: z.literal(true).optional(),
    link: z.literal(true).optional(),
    title: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional()
  })
  .strict()

export const AdvertisingCountAggregateInputObjectSchema = Schema
