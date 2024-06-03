import { z } from 'zod'
import { UserTokenUpdateInputObjectSchema } from './objects/UserTokenUpdateInput.schema'
import { UserTokenUncheckedUpdateInputObjectSchema } from './objects/UserTokenUncheckedUpdateInput.schema'
import { UserTokenWhereUniqueInputObjectSchema } from './objects/UserTokenWhereUniqueInput.schema'

export const UserTokenUpdateOneSchema = z.object({
  data: z.union([
    UserTokenUpdateInputObjectSchema,
    UserTokenUncheckedUpdateInputObjectSchema
  ]),
  where: UserTokenWhereUniqueInputObjectSchema
})
