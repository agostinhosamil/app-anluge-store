import { z } from 'zod'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FavoriteScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FavoriteScalarWhereInputObjectSchema),
        z.lazy(() => FavoriteScalarWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => FavoriteScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FavoriteScalarWhereInputObjectSchema),
        z.lazy(() => FavoriteScalarWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    productId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional()
  })
  .strict()

export const FavoriteScalarWhereInputObjectSchema = Schema
