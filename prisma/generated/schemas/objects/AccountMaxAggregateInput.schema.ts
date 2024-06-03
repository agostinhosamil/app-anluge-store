import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AccountMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    providerType: z.literal(true).optional(),
    providerId: z.literal(true).optional(),
    providerAccountId: z.literal(true).optional(),
    refreshToken: z.literal(true).optional(),
    accessToken: z.literal(true).optional(),
    accessTokenExpires: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional()
  })
  .strict()

export const AccountMaxAggregateInputObjectSchema = Schema
