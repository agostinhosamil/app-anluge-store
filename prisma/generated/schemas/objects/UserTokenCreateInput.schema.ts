import { z } from 'zod'
import { UserCreateNestedOneWithoutTokenInputObjectSchema } from './UserCreateNestedOneWithoutTokenInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserTokenCreateInput> = z
  .object({
    body: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutTokenInputObjectSchema)
  })
  .strict()

export const UserTokenCreateInputObjectSchema = Schema
