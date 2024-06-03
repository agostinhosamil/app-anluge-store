import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AccountCreateManyInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    providerType: z.string(),
    providerId: z.string(),
    providerAccountId: z.string(),
    refreshToken: z.string().optional().nullable(),
    accessToken: z.string().optional().nullable(),
    accessTokenExpires: z.coerce.date().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
  })
  .strict()

export const AccountCreateManyInputObjectSchema = Schema
