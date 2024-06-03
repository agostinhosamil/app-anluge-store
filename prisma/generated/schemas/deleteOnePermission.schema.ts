import { z } from 'zod'
import { PermissionWhereUniqueInputObjectSchema } from './objects/PermissionWhereUniqueInput.schema'

export const PermissionDeleteOneSchema = z.object({
  where: PermissionWhereUniqueInputObjectSchema
})
