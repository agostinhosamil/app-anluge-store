import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { RoleOrderByRelationAggregateInputObjectSchema } from './RoleOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PermissionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    key: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    roles: z
      .lazy(() => RoleOrderByRelationAggregateInputObjectSchema)
      .optional()
  })
  .strict()

export const PermissionOrderByWithRelationInputObjectSchema = Schema
