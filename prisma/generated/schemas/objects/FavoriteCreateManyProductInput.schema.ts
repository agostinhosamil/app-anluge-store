import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FavoriteCreateManyProductInput> = z
  .object({
    id: z.number().optional(),
    userId: z.string()
  })
  .strict()

export const FavoriteCreateManyProductInputObjectSchema = Schema
