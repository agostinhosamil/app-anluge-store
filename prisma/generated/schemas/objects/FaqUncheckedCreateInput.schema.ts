import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    question: z.string(),
    answer: z.string().optional(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    productId: z.string().optional().nullable(),
    userId: z.string()
  })
  .strict()

export const FaqUncheckedCreateInputObjectSchema = Schema
