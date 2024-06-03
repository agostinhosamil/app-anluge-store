import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { OrderListRelationFilterObjectSchema } from './OrderListRelationFilter.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CartWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CartWhereInputObjectSchema),
        z.lazy(() => CartWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => CartWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CartWhereInputObjectSchema),
        z.lazy(() => CartWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
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
    orders: z.lazy(() => OrderListRelationFilterObjectSchema).optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema)
      ])
      .optional()
      .nullable()
  })
  .strict()

export const CartWhereInputObjectSchema = Schema
