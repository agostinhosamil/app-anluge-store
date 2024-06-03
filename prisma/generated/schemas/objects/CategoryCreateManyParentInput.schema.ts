import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CategoryCreateManyParentInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    slag: z.string(),
    icon: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
  })
  .strict()

export const CategoryCreateManyParentInputObjectSchema = Schema
