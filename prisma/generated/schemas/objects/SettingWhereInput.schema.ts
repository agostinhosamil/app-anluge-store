import { z } from 'zod'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SettingWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SettingWhereInputObjectSchema),
        z.lazy(() => SettingWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => SettingWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SettingWhereInputObjectSchema),
        z.lazy(() => SettingWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    property: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    value: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional()
  })
  .strict()

export const SettingWhereInputObjectSchema = Schema
