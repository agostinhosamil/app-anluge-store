import { z } from 'zod'
import { UserTokenWhereInputObjectSchema } from './UserTokenWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserTokenListRelationFilter> = z
  .object({
    every: z.lazy(() => UserTokenWhereInputObjectSchema).optional(),
    some: z.lazy(() => UserTokenWhereInputObjectSchema).optional(),
    none: z.lazy(() => UserTokenWhereInputObjectSchema).optional()
  })
  .strict()

export const UserTokenListRelationFilterObjectSchema = Schema
