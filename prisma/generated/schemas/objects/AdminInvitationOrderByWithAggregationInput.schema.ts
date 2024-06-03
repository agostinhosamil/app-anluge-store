import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AdminInvitationCountOrderByAggregateInputObjectSchema } from './AdminInvitationCountOrderByAggregateInput.schema'
import { AdminInvitationAvgOrderByAggregateInputObjectSchema } from './AdminInvitationAvgOrderByAggregateInput.schema'
import { AdminInvitationMaxOrderByAggregateInputObjectSchema } from './AdminInvitationMaxOrderByAggregateInput.schema'
import { AdminInvitationMinOrderByAggregateInputObjectSchema } from './AdminInvitationMinOrderByAggregateInput.schema'
import { AdminInvitationSumOrderByAggregateInputObjectSchema } from './AdminInvitationSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AdminInvitationOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    roleId: z.lazy(() => SortOrderSchema).optional(),
    expires: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AdminInvitationCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => AdminInvitationAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => AdminInvitationMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => AdminInvitationMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => AdminInvitationSumOrderByAggregateInputObjectSchema)
      .optional()
  })
  .strict()

export const AdminInvitationOrderByWithAggregationInputObjectSchema = Schema
