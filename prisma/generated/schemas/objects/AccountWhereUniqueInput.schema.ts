import { z } from 'zod'
import { AccountProviderIdProviderAccountIdCompoundUniqueInputObjectSchema } from './AccountProviderIdProviderAccountIdCompoundUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AccountWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    providerId_providerAccountId: z
      .lazy(
        () => AccountProviderIdProviderAccountIdCompoundUniqueInputObjectSchema
      )
      .optional()
  })
  .strict()

export const AccountWhereUniqueInputObjectSchema = Schema
