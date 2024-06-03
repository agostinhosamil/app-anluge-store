import { z } from 'zod'
import { UserTokenWhereUniqueInputObjectSchema } from './objects/UserTokenWhereUniqueInput.schema'

export const UserTokenFindUniqueSchema = z.object({
  where: UserTokenWhereUniqueInputObjectSchema
})
