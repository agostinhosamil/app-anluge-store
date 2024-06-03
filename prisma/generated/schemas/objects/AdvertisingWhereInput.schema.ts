import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AdvertisingWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AdvertisingWhereInputObjectSchema),
        z.lazy(() => AdvertisingWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => AdvertisingWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AdvertisingWhereInputObjectSchema),
        z.lazy(() => AdvertisingWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    expiresAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    banner: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    link: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    title: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional()
  })
  .strict()

export const AdvertisingWhereInputObjectSchema = Schema
