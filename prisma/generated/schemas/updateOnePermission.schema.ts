import { z } from 'zod'
import { PermissionUpdateInputObjectSchema } from './objects/PermissionUpdateInput.schema'
import { PermissionUncheckedUpdateInputObjectSchema } from './objects/PermissionUncheckedUpdateInput.schema'
import { PermissionWhereUniqueInputObjectSchema } from './objects/PermissionWhereUniqueInput.schema'

export const PermissionUpdateOneSchema = z.object({
  data: z.union([
    PermissionUpdateInputObjectSchema,
    PermissionUncheckedUpdateInputObjectSchema
  ]),
  where: PermissionWhereUniqueInputObjectSchema
})
