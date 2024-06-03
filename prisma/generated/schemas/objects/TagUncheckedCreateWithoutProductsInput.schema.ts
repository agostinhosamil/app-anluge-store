import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TagUncheckedCreateWithoutProductsInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    slag: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
  })
  .strict()

export const TagUncheckedCreateWithoutProductsInputObjectSchema = Schema
