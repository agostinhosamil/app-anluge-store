import { z } from 'zod'
import { VerificationRequestIdentifierTokenCompoundUniqueInputObjectSchema } from './VerificationRequestIdentifierTokenCompoundUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VerificationRequestWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    token: z.string().optional(),
    identifier_token: z
      .lazy(
        () => VerificationRequestIdentifierTokenCompoundUniqueInputObjectSchema
      )
      .optional()
  })
  .strict()

export const VerificationRequestWhereUniqueInputObjectSchema = Schema
