import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AccountWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AccountWhereInputObjectSchema),
        z.lazy(() => AccountWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => AccountWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccountWhereInputObjectSchema),
        z.lazy(() => AccountWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    providerType: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    providerId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    providerAccountId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    refreshToken: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    accessToken: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    accessTokenExpires: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date()
      ])
      .optional()
      .nullable(),
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

export const AccountWhereInputObjectSchema = Schema
