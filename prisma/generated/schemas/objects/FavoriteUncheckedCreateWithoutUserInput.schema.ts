import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FavoriteUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.number().optional(),
    productId: z.string()
  })
  .strict()

export const FavoriteUncheckedCreateWithoutUserInputObjectSchema = Schema
