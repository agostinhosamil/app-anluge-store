import { z } from 'zod'
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SettingScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SettingScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => SettingScalarWhereWithAggregatesInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => SettingScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SettingScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => SettingScalarWhereWithAggregatesInputObjectSchema).array()
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    property: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    value: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
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

export const SettingScalarWhereWithAggregatesInputObjectSchema = Schema
