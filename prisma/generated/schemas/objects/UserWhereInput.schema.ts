import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { UserTokenListRelationFilterObjectSchema } from './UserTokenListRelationFilter.schema'
import { RoleRelationFilterObjectSchema } from './RoleRelationFilter.schema'
import { RoleWhereInputObjectSchema } from './RoleWhereInput.schema'
import { RateListRelationFilterObjectSchema } from './RateListRelationFilter.schema'
import { FavoriteListRelationFilterObjectSchema } from './FavoriteListRelationFilter.schema'
import { CartRelationFilterObjectSchema } from './CartRelationFilter.schema'
import { CartWhereInputObjectSchema } from './CartWhereInput.schema'
import { FaqListRelationFilterObjectSchema } from './FaqListRelationFilter.schema'
import { AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema'
import { SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    password: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    phone: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    username: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    emailVerified: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date()
      ])
      .optional()
      .nullable(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    roleId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    Token: z.lazy(() => UserTokenListRelationFilterObjectSchema).optional(),
    role: z
      .union([
        z.lazy(() => RoleRelationFilterObjectSchema),
        z.lazy(() => RoleWhereInputObjectSchema)
      ])
      .optional(),
    rates: z.lazy(() => RateListRelationFilterObjectSchema).optional(),
    favorites: z.lazy(() => FavoriteListRelationFilterObjectSchema).optional(),
    cart: z
      .union([
        z.lazy(() => CartRelationFilterObjectSchema),
        z.lazy(() => CartWhereInputObjectSchema)
      ])
      .optional()
      .nullable(),
    Faq: z.lazy(() => FaqListRelationFilterObjectSchema).optional(),
    accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
    sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional()
  })
  .strict()

export const UserWhereInputObjectSchema = Schema
