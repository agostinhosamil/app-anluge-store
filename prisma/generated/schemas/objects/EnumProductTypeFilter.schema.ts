import { z } from 'zod'
import { ProductTypeSchema } from '../enums/ProductType.schema'
import { NestedEnumProductTypeFilterObjectSchema } from './NestedEnumProductTypeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumProductTypeFilter> = z
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
        z.lazy(() => NestedEnumProductTypeFilterObjectSchema)
      ])
      .optional()
  })
  .strict()

export const EnumProductTypeFilterObjectSchema = Schema
