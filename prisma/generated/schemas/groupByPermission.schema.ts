import { z } from 'zod'
import { PermissionWhereInputObjectSchema } from './objects/PermissionWhereInput.schema'
import { PermissionOrderByWithAggregationInputObjectSchema } from './objects/PermissionOrderByWithAggregationInput.schema'
import { PermissionScalarWhereWithAggregatesInputObjectSchema } from './objects/PermissionScalarWhereWithAggregatesInput.schema'
import { PermissionScalarFieldEnumSchema } from './enums/PermissionScalarFieldEnum.schema'

export const PermissionGroupBySchema = z.object({
  where: PermissionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PermissionOrderByWithAggregationInputObjectSchema,
      PermissionOrderByWithAggregationInputObjectSchema.array()
    ])
    .optional(),
  having: PermissionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PermissionScalarFieldEnumSchema)
})
