import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VerificationRequestUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    identifier: z.string(),
    token: z.string(),
    expires: z.coerce.date(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
  })
  .strict()

export const VerificationRequestUncheckedCreateInputObjectSchema = Schema
