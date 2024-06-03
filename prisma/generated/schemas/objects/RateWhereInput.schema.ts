import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'
import { MediaListRelationFilterObjectSchema } from './MediaListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RateWhereInputObjectSchema),
        z.lazy(() => RateWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => RateWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RateWhereInputObjectSchema),
        z.lazy(() => RateWhereInputObjectSchema).array()
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
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema)
      ])
      .optional(),
    medias: z.lazy(() => MediaListRelationFilterObjectSchema).optional()
  })
  .strict()

export const RateWhereInputObjectSchema = Schema
