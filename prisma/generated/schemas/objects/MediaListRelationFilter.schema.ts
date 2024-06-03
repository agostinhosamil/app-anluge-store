import { z } from 'zod'
import { MediaWhereInputObjectSchema } from './MediaWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaListRelationFilter> = z
  .object({
    every: z.lazy(() => MediaWhereInputObjectSchema).optional(),
    some: z.lazy(() => MediaWhereInputObjectSchema).optional(),
    none: z.lazy(() => MediaWhereInputObjectSchema).optional()
  })
  .strict()

export const MediaListRelationFilterObjectSchema = Schema
