import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    expires: z.lazy(() => SortOrderSchema).optional(),
    sessionToken: z.lazy(() => SortOrderSchema).optional(),
    accessToken: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional()
  })
  .strict()

export const SessionMaxOrderByAggregateInputObjectSchema = Schema
