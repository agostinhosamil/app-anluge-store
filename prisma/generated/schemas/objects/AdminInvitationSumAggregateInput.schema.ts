import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AdminInvitationSumAggregateInputType> = z
  .object({
    roleId: z.literal(true).optional()
  })
  .strict()

export const AdminInvitationSumAggregateInputObjectSchema = Schema
