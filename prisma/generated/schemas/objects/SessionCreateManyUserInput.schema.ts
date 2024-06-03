import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SessionCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    expires: z.coerce.date(),
    sessionToken: z.string(),
    accessToken: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
  })
  .strict()

export const SessionCreateManyUserInputObjectSchema = Schema
