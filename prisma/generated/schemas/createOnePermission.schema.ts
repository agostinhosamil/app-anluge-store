import { z } from 'zod'
import { PermissionCreateInputObjectSchema } from './objects/PermissionCreateInput.schema'
import { PermissionUncheckedCreateInputObjectSchema } from './objects/PermissionUncheckedCreateInput.schema'

export const PermissionCreateOneSchema = z.object({
  data: z.union([
    PermissionCreateInputObjectSchema,
    PermissionUncheckedCreateInputObjectSchema
  ])
})
