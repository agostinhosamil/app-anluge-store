import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CategoryMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
    slag: z.literal(true).optional(),
    icon: z.literal(true).optional(),
    parentId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional()
  })
  .strict()

export const CategoryMinAggregateInputObjectSchema = Schema
