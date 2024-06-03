import { z } from 'zod'
import { PermissionOrderByWithRelationInputObjectSchema } from './objects/PermissionOrderByWithRelationInput.schema'
import { PermissionWhereInputObjectSchema } from './objects/PermissionWhereInput.schema'
import { PermissionWhereUniqueInputObjectSchema } from './objects/PermissionWhereUniqueInput.schema'
import { PermissionCountAggregateInputObjectSchema } from './objects/PermissionCountAggregateInput.schema'
import { PermissionMinAggregateInputObjectSchema } from './objects/PermissionMinAggregateInput.schema'
import { PermissionMaxAggregateInputObjectSchema } from './objects/PermissionMaxAggregateInput.schema'
import { PermissionAvgAggregateInputObjectSchema } from './objects/PermissionAvgAggregateInput.schema'
import { PermissionSumAggregateInputObjectSchema } from './objects/PermissionSumAggregateInput.schema'

export const PermissionAggregateSchema = z.object({
  orderBy: z
    .union([
      PermissionOrderByWithRelationInputObjectSchema,
      PermissionOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: PermissionWhereInputObjectSchema.optional(),
  cursor: PermissionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PermissionCountAggregateInputObjectSchema])
    .optional(),
  _min: PermissionMinAggregateInputObjectSchema.optional(),
  _max: PermissionMaxAggregateInputObjectSchema.optional(),
  _avg: PermissionAvgAggregateInputObjectSchema.optional(),
  _sum: PermissionSumAggregateInputObjectSchema.optional()
})
