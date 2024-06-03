import { z } from 'zod'
import { UserTokenUpdateManyMutationInputObjectSchema } from './objects/UserTokenUpdateManyMutationInput.schema'
import { UserTokenWhereInputObjectSchema } from './objects/UserTokenWhereInput.schema'

export const UserTokenUpdateManySchema = z.object({
  data: UserTokenUpdateManyMutationInputObjectSchema,
  where: UserTokenWhereInputObjectSchema.optional()
})
