import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserTokenWhereUniqueInput> = z
  .object({
    id: z.number().optional()
  })
  .strict()

export const UserTokenWhereUniqueInputObjectSchema = Schema
