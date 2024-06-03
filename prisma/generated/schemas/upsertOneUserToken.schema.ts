import { z } from 'zod'
import { UserTokenWhereUniqueInputObjectSchema } from './objects/UserTokenWhereUniqueInput.schema'
import { UserTokenCreateInputObjectSchema } from './objects/UserTokenCreateInput.schema'
import { UserTokenUncheckedCreateInputObjectSchema } from './objects/UserTokenUncheckedCreateInput.schema'
import { UserTokenUpdateInputObjectSchema } from './objects/UserTokenUpdateInput.schema'
import { UserTokenUncheckedUpdateInputObjectSchema } from './objects/UserTokenUncheckedUpdateInput.schema'

export const UserTokenUpsertSchema = z.object({
  where: UserTokenWhereUniqueInputObjectSchema,
  create: z.union([
    UserTokenCreateInputObjectSchema,
    UserTokenUncheckedCreateInputObjectSchema
  ]),
  update: z.union([
    UserTokenUpdateInputObjectSchema,
    UserTokenUncheckedUpdateInputObjectSchema
  ])
})
