import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema'
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FaqWhereInputObjectSchema),
        z.lazy(() => FaqWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => FaqWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FaqWhereInputObjectSchema),
        z.lazy(() => FaqWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    question: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    answer: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    published: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    productId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema)
      ])
      .optional(),
    Product: z
      .union([
        z.lazy(() => ProductRelationFilterObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema)
      ])
      .optional()
      .nullable()
  })
  .strict()

export const FaqWhereInputObjectSchema = Schema
