import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrderScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => OrderScalarWhereInputObjectSchema),
        z.lazy(() => OrderScalarWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => OrderScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => OrderScalarWhereInputObjectSchema),
        z.lazy(() => OrderScalarWhereInputObjectSchema).array()
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
      .optional()
  })
  .strict()

export const OrderScalarWhereInputObjectSchema = Schema
