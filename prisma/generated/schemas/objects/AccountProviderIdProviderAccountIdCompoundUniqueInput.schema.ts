import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AccountProviderIdProviderAccountIdCompoundUniqueInput> =
  z
    .object({
      providerId: z.string(),
      providerAccountId: z.string()
    })
    .strict()

export const AccountProviderIdProviderAccountIdCompoundUniqueInputObjectSchema =
  Schema
