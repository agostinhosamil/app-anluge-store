import { z } from 'zod'
import { PermissionUpdateManyMutationInputObjectSchema } from './objects/PermissionUpdateManyMutationInput.schema'
import { PermissionWhereInputObjectSchema } from './objects/PermissionWhereInput.schema'

export const PermissionUpdateManySchema = z.object({
  data: PermissionUpdateManyMutationInputObjectSchema,
  where: PermissionWhereInputObjectSchema.optional()
})
