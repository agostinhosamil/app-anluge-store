import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    providerType: z.lazy(() => SortOrderSchema).optional(),
    providerId: z.lazy(() => SortOrderSchema).optional(),
    providerAccountId: z.lazy(() => SortOrderSchema).optional(),
    refreshToken: z.lazy(() => SortOrderSchema).optional(),
    accessToken: z.lazy(() => SortOrderSchema).optional(),
    accessTokenExpires: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional()
  })
  .strict()

export const AccountMaxOrderByAggregateInputObjectSchema = Schema
