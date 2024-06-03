import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AccountScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AccountScalarWhereInputObjectSchema),
        z.lazy(() => AccountScalarWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => AccountScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccountScalarWhereInputObjectSchema),
        z.lazy(() => AccountScalarWhereInputObjectSchema).array()
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
      .optional()
  })
  .strict()

export const AccountScalarWhereInputObjectSchema = Schema
