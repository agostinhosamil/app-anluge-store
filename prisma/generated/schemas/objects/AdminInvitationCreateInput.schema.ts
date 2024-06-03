import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AdminInvitationCreateInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    email: z.string(),
    roleId: z.number(),
    expires: z.coerce.date(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
  })
  .strict()

export const AdminInvitationCreateInputObjectSchema = Schema
