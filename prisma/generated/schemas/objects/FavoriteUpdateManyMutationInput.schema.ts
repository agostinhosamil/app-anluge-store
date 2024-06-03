import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FavoriteUpdateManyMutationInput> = z
  .object({})
  .strict()

export const FavoriteUpdateManyMutationInputObjectSchema = Schema
