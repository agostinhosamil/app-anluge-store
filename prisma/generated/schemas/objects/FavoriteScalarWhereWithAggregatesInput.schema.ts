import { z } from 'zod'
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FavoriteScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FavoriteScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => FavoriteScalarWhereWithAggregatesInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => FavoriteScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FavoriteScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => FavoriteScalarWhereWithAggregatesInputObjectSchema).array()
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    productId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional()
  })
  .strict()

export const FavoriteScalarWhereWithAggregatesInputObjectSchema = Schema
