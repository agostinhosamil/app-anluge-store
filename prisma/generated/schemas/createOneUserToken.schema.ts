import { z } from 'zod'
import { UserTokenCreateInputObjectSchema } from './objects/UserTokenCreateInput.schema'
import { UserTokenUncheckedCreateInputObjectSchema } from './objects/UserTokenUncheckedCreateInput.schema'

export const UserTokenCreateOneSchema = z.object({
  data: z.union([
    UserTokenCreateInputObjectSchema,
    UserTokenUncheckedCreateInputObjectSchema
  ])
})
