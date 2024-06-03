import { z } from 'zod'
import { UserCreateNestedOneWithoutAccountsInputObjectSchema } from './UserCreateNestedOneWithoutAccountsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AccountCreateInput> = z
  .object({
    id: z.string().optional(),
    providerType: z.string(),
    providerId: z.string(),
    providerAccountId: z.string(),
    refreshToken: z.string().optional().nullable(),
    accessToken: z.string().optional().nullable(),
    accessTokenExpires: z.coerce.date().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputObjectSchema)
  })
  .strict()

export const AccountCreateInputObjectSchema = Schema
