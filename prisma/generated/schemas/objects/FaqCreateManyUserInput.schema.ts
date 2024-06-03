import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    question: z.string(),
    answer: z.string().optional(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    productId: z.string().optional().nullable()
  })
  .strict()

export const FaqCreateManyUserInputObjectSchema = Schema
