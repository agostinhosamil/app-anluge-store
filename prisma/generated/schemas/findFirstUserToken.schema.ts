import { z } from 'zod'
import { UserTokenOrderByWithRelationInputObjectSchema } from './objects/UserTokenOrderByWithRelationInput.schema'
import { UserTokenWhereInputObjectSchema } from './objects/UserTokenWhereInput.schema'
import { UserTokenWhereUniqueInputObjectSchema } from './objects/UserTokenWhereUniqueInput.schema'
import { UserTokenScalarFieldEnumSchema } from './enums/UserTokenScalarFieldEnum.schema'

export const UserTokenFindFirstSchema = z.object({
  orderBy: z
    .union([
      UserTokenOrderByWithRelationInputObjectSchema,
      UserTokenOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: UserTokenWhereInputObjectSchema.optional(),
  cursor: UserTokenWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(UserTokenScalarFieldEnumSchema).optional()
})
