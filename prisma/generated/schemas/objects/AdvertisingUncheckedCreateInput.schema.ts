import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AdvertisingUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    expiresAt: z.coerce.date(),
    banner: z.string(),
    link: z.string().optional().nullable(),
    title: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
  })
  .strict()

export const AdvertisingUncheckedCreateInputObjectSchema = Schema
