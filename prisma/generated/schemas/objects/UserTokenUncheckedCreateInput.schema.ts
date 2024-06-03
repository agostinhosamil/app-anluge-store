import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserTokenUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    body: z.string(),
    userId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
  })
  .strict()

export const UserTokenUncheckedCreateInputObjectSchema = Schema
