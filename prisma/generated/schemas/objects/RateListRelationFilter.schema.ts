import { z } from 'zod'
import { RateWhereInputObjectSchema } from './RateWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateListRelationFilter> = z
  .object({
    every: z.lazy(() => RateWhereInputObjectSchema).optional(),
    some: z.lazy(() => RateWhereInputObjectSchema).optional(),
    none: z.lazy(() => RateWhereInputObjectSchema).optional()
  })
  .strict()

export const RateListRelationFilterObjectSchema = Schema
