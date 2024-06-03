import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RateScalarWhereInputObjectSchema),
        z.lazy(() => RateScalarWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => RateScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RateScalarWhereInputObjectSchema),
        z.lazy(() => RateScalarWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    message: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    value: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional()
  })
  .strict()

export const RateScalarWhereInputObjectSchema = Schema
