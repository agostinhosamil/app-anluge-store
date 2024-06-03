import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { EnumMediaTypeFilterObjectSchema } from './EnumMediaTypeFilter.schema'
import { MediaTypeSchema } from '../enums/MediaType.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema'
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema'
import { RateRelationFilterObjectSchema } from './RateRelationFilter.schema'
import { RateWhereInputObjectSchema } from './RateWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MediaWhereInputObjectSchema),
        z.lazy(() => MediaWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => MediaWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MediaWhereInputObjectSchema),
        z.lazy(() => MediaWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    fileName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumMediaTypeFilterObjectSchema),
        z.lazy(() => MediaTypeSchema)
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    productId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    rateId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    Product: z
      .union([
        z.lazy(() => ProductRelationFilterObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema)
      ])
      .optional()
      .nullable(),
    Rate: z
      .union([
        z.lazy(() => RateRelationFilterObjectSchema),
        z.lazy(() => RateWhereInputObjectSchema)
      ])
      .optional()
      .nullable()
  })
  .strict()

export const MediaWhereInputObjectSchema = Schema
