import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AdvertisingScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AdvertisingScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => AdvertisingScalarWhereWithAggregatesInputObjectSchema)
          .array()
      ])
      .optional(),
    OR: z
      .lazy(() => AdvertisingScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AdvertisingScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => AdvertisingScalarWhereWithAggregatesInputObjectSchema)
          .array()
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    expiresAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date()
      ])
      .optional(),
    banner: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    link: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string()
      ])
      .optional()
      .nullable(),
    title: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string()
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date()
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date()
      ])
      .optional()
  })
  .strict()

export const AdvertisingScalarWhereWithAggregatesInputObjectSchema = Schema
