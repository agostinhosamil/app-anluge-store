import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateCreateManyInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    message: z.string(),
    value: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string()
  })
  .strict()

export const RateCreateManyInputObjectSchema = Schema
