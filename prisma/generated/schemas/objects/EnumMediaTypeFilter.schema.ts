import { z } from 'zod'
import { MediaTypeSchema } from '../enums/MediaType.schema'
import { NestedEnumMediaTypeFilterObjectSchema } from './NestedEnumMediaTypeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumMediaTypeFilter> = z
  .object({
    equals: z.lazy(() => MediaTypeSchema).optional(),
    in: z
      .union([
        z.lazy(() => MediaTypeSchema).array(),
        z.lazy(() => MediaTypeSchema)
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => MediaTypeSchema).array(),
        z.lazy(() => MediaTypeSchema)
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => MediaTypeSchema),
        z.lazy(() => NestedEnumMediaTypeFilterObjectSchema)
      ])
      .optional()
  })
  .strict()

export const EnumMediaTypeFilterObjectSchema = Schema
