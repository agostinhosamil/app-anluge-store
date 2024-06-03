import { z } from 'zod'
import { RateWhereInputObjectSchema } from './RateWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateRelationFilter> = z
  .object({
    is: z
      .lazy(() => RateWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => RateWhereInputObjectSchema)
      .optional()
      .nullable()
  })
  .strict()

export const RateRelationFilterObjectSchema = Schema
