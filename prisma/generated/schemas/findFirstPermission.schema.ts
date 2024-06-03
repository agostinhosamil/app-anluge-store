import { z } from 'zod'
import { PermissionOrderByWithRelationInputObjectSchema } from './objects/PermissionOrderByWithRelationInput.schema'
import { PermissionWhereInputObjectSchema } from './objects/PermissionWhereInput.schema'
import { PermissionWhereUniqueInputObjectSchema } from './objects/PermissionWhereUniqueInput.schema'
import { PermissionScalarFieldEnumSchema } from './enums/PermissionScalarFieldEnum.schema'

export const PermissionFindFirstSchema = z.object({
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
  distinct: z.array(PermissionScalarFieldEnumSchema).optional()
})
