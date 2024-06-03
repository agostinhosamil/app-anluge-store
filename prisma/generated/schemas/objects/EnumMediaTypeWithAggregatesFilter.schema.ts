import { z } from 'zod'
import { MediaTypeSchema } from '../enums/MediaType.schema'
import { NestedEnumMediaTypeWithAggregatesFilterObjectSchema } from './NestedEnumMediaTypeWithAggregatesFilter.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedEnumMediaTypeFilterObjectSchema } from './NestedEnumMediaTypeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumMediaTypeWithAggregatesFilter> = z
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
        z.lazy(() => NestedEnumMediaTypeWithAggregatesFilterObjectSchema)
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumMediaTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumMediaTypeFilterObjectSchema).optional()
  })
  .strict()

export const EnumMediaTypeWithAggregatesFilterObjectSchema = Schema
