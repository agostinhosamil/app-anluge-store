import { z } from 'zod'
import { PermissionWhereUniqueInputObjectSchema } from './objects/PermissionWhereUniqueInput.schema'

export const PermissionFindUniqueSchema = z.object({
  where: PermissionWhereUniqueInputObjectSchema
})
