import { z } from 'zod'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { PermissionListRelationFilterObjectSchema } from './PermissionListRelationFilter.schema'
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RoleWhereInputObjectSchema),
        z.lazy(() => RoleWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => RoleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoleWhereInputObjectSchema),
        z.lazy(() => RoleWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    key: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    permissions: z
      .lazy(() => PermissionListRelationFilterObjectSchema)
      .optional(),
    User: z.lazy(() => UserListRelationFilterObjectSchema).optional()
  })
  .strict()

export const RoleWhereInputObjectSchema = Schema
