import { z } from 'zod'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserTokenWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserTokenWhereInputObjectSchema),
        z.lazy(() => UserTokenWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => UserTokenWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserTokenWhereInputObjectSchema),
        z.lazy(() => UserTokenWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    body: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema)
      ])
      .optional()
  })
  .strict()

export const UserTokenWhereInputObjectSchema = Schema
