import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { ProductListRelationFilterObjectSchema } from './ProductListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TagWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TagWhereInputObjectSchema),
        z.lazy(() => TagWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => TagWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TagWhereInputObjectSchema),
        z.lazy(() => TagWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    slag: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    products: z.lazy(() => ProductListRelationFilterObjectSchema).optional()
  })
  .strict()

export const TagWhereInputObjectSchema = Schema
