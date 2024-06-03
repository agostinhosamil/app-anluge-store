import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserTokenCreateWithoutUserInput> = z
  .object({
    body: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
  })
  .strict()

export const UserTokenCreateWithoutUserInputObjectSchema = Schema
