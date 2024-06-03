import { z } from 'zod'
import { FaqWhereInputObjectSchema } from './FaqWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqListRelationFilter> = z
  .object({
    every: z.lazy(() => FaqWhereInputObjectSchema).optional(),
    some: z.lazy(() => FaqWhereInputObjectSchema).optional(),
    none: z.lazy(() => FaqWhereInputObjectSchema).optional()
  })
  .strict()

export const FaqListRelationFilterObjectSchema = Schema
