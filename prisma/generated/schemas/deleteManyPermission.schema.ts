import { z } from 'zod'
import { PermissionWhereInputObjectSchema } from './objects/PermissionWhereInput.schema'

export const PermissionDeleteManySchema = z.object({
  where: PermissionWhereInputObjectSchema.optional()
})
