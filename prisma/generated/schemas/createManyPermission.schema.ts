import { z } from 'zod'
import { PermissionCreateManyInputObjectSchema } from './objects/PermissionCreateManyInput.schema'

export const PermissionCreateManySchema = z.object({
  data: z.union([
    PermissionCreateManyInputObjectSchema,
    z.array(PermissionCreateManyInputObjectSchema)
  ]),
  skipDuplicates: z.boolean().optional()
})
