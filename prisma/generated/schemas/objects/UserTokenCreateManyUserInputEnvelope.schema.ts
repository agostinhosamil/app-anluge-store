import { z } from 'zod'
import { UserTokenCreateManyUserInputObjectSchema } from './UserTokenCreateManyUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserTokenCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => UserTokenCreateManyUserInputObjectSchema),
      z.lazy(() => UserTokenCreateManyUserInputObjectSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict()

export const UserTokenCreateManyUserInputEnvelopeObjectSchema = Schema
