import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FaqScalarWhereInputObjectSchema),
        z.lazy(() => FaqScalarWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => FaqScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FaqScalarWhereInputObjectSchema),
        z.lazy(() => FaqScalarWhereInputObjectSchema).array()
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
      .optional()
  })
  .strict()

export const FaqScalarWhereInputObjectSchema = Schema
