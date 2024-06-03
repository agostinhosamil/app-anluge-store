import { z } from 'zod'
import { PermissionWhereUniqueInputObjectSchema } from './objects/PermissionWhereUniqueInput.schema'
import { PermissionCreateInputObjectSchema } from './objects/PermissionCreateInput.schema'
import { PermissionUncheckedCreateInputObjectSchema } from './objects/PermissionUncheckedCreateInput.schema'
import { PermissionUpdateInputObjectSchema } from './objects/PermissionUpdateInput.schema'
import { PermissionUncheckedUpdateInputObjectSchema } from './objects/PermissionUncheckedUpdateInput.schema'

export const PermissionUpsertSchema = z.object({
  where: PermissionWhereUniqueInputObjectSchema,
  create: z.union([
    PermissionCreateInputObjectSchema,
    PermissionUncheckedCreateInputObjectSchema
  ]),
  update: z.union([
    PermissionUpdateInputObjectSchema,
    PermissionUncheckedUpdateInputObjectSchema
  ])
})
