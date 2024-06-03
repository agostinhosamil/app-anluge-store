import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { PermissionOrderByRelationAggregateInputObjectSchema } from './PermissionOrderByRelationAggregateInput.schema'
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoleOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    key: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    permissions: z
      .lazy(() => PermissionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    User: z.lazy(() => UserOrderByRelationAggregateInputObjectSchema).optional()
  })
  .strict()

export const RoleOrderByWithRelationInputObjectSchema = Schema
