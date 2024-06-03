import { z } from 'zod'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema'
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FavoriteWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FavoriteWhereInputObjectSchema),
        z.lazy(() => FavoriteWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => FavoriteWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FavoriteWhereInputObjectSchema),
        z.lazy(() => FavoriteWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    productId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    product: z
      .union([
        z.lazy(() => ProductRelationFilterObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema)
      ])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema)
      ])
      .optional()
  })
  .strict()

export const FavoriteWhereInputObjectSchema = Schema
