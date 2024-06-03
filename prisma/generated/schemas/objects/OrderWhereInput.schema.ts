import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema'
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema'
import { CartRelationFilterObjectSchema } from './CartRelationFilter.schema'
import { CartWhereInputObjectSchema } from './CartWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrderWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => OrderWhereInputObjectSchema),
        z.lazy(() => OrderWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => OrderWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => OrderWhereInputObjectSchema),
        z.lazy(() => OrderWhereInputObjectSchema).array()
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
    cartId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    productId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    product: z
      .union([
        z.lazy(() => ProductRelationFilterObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema)
      ])
      .optional(),
    Cart: z
      .union([
        z.lazy(() => CartRelationFilterObjectSchema),
        z.lazy(() => CartWhereInputObjectSchema)
      ])
      .optional()
      .nullable()
  })
  .strict()

export const OrderWhereInputObjectSchema = Schema
