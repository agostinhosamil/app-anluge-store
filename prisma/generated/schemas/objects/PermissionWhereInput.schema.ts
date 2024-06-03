import { z } from 'zod'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { RoleListRelationFilterObjectSchema } from './RoleListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PermissionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PermissionWhereInputObjectSchema),
        z.lazy(() => PermissionWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => PermissionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PermissionWhereInputObjectSchema),
        z.lazy(() => PermissionWhereInputObjectSchema).array()
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
    roles: z.lazy(() => RoleListRelationFilterObjectSchema).optional()
  })
  .strict()

export const PermissionWhereInputObjectSchema = Schema
