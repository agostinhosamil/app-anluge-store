import { z } from 'zod'
import { UserTokenCreateManyInputObjectSchema } from './objects/UserTokenCreateManyInput.schema'

export const UserTokenCreateManySchema = z.object({
  data: z.union([
    UserTokenCreateManyInputObjectSchema,
    z.array(UserTokenCreateManyInputObjectSchema)
  ]),
  skipDuplicates: z.boolean().optional()
})
