import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AdminInvitationMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    email: z.literal(true).optional(),
    roleId: z.literal(true).optional(),
    expires: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional()
  })
  .strict()

export const AdminInvitationMinAggregateInputObjectSchema = Schema
