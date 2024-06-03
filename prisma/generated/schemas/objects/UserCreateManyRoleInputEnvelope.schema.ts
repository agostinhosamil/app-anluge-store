import { z } from 'zod'
import { UserCreateManyRoleInputObjectSchema } from './UserCreateManyRoleInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateManyRoleInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => UserCreateManyRoleInputObjectSchema),
      z.lazy(() => UserCreateManyRoleInputObjectSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict()

export const UserCreateManyRoleInputEnvelopeObjectSchema = Schema
