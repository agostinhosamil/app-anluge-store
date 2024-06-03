import { z } from 'zod'
import { UserTokenWhereInputObjectSchema } from './objects/UserTokenWhereInput.schema'

export const UserTokenDeleteManySchema = z.object({
  where: UserTokenWhereInputObjectSchema.optional()
})
