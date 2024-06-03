import { z } from 'zod'
import { UserCreateNestedOneWithoutSessionsInputObjectSchema } from './UserCreateNestedOneWithoutSessionsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SessionCreateInput> = z
  .object({
    id: z.string().optional(),
    expires: z.coerce.date(),
    sessionToken: z.string(),
    accessToken: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputObjectSchema)
  })
  .strict()

export const SessionCreateInputObjectSchema = Schema
