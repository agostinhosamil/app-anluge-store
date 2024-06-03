import { z } from 'zod'
import { UserTokenWhereUniqueInputObjectSchema } from './objects/UserTokenWhereUniqueInput.schema'

export const UserTokenDeleteOneSchema = z.object({
  where: UserTokenWhereUniqueInputObjectSchema
})
