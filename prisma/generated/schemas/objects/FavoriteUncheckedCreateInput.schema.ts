import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FavoriteUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    productId: z.string(),
    userId: z.string()
  })
  .strict()

export const FavoriteUncheckedCreateInputObjectSchema = Schema
