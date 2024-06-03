import { z } from 'zod'
import { ProductTypeSchema } from '../enums/ProductType.schema'
import { NestedEnumProductTypeWithAggregatesFilterObjectSchema } from './NestedEnumProductTypeWithAggregatesFilter.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedEnumProductTypeFilterObjectSchema } from './NestedEnumProductTypeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumProductTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => ProductTypeSchema).optional(),
    in: z
      .union([
        z.lazy(() => ProductTypeSchema).array(),
        z.lazy(() => ProductTypeSchema)
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => ProductTypeSchema).array(),
        z.lazy(() => ProductTypeSchema)
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => ProductTypeSchema),
        z.lazy(() => NestedEnumProductTypeWithAggregatesFilterObjectSchema)
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumProductTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumProductTypeFilterObjectSchema).optional()
  })
  .strict()

export const EnumProductTypeWithAggregatesFilterObjectSchema = Schema
