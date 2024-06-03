import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateManyRoleInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    phone: z.string(),
    username: z.string().optional().nullable(),
    emailVerified: z.coerce.date().optional().nullable(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
  })
  .strict()

export const UserCreateManyRoleInputObjectSchema = Schema
