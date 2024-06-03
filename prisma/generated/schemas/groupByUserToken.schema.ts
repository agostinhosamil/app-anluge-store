import { z } from 'zod'
import { UserTokenWhereInputObjectSchema } from './objects/UserTokenWhereInput.schema'
import { UserTokenOrderByWithAggregationInputObjectSchema } from './objects/UserTokenOrderByWithAggregationInput.schema'
import { UserTokenScalarWhereWithAggregatesInputObjectSchema } from './objects/UserTokenScalarWhereWithAggregatesInput.schema'
import { UserTokenScalarFieldEnumSchema } from './enums/UserTokenScalarFieldEnum.schema'

export const UserTokenGroupBySchema = z.object({
  where: UserTokenWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      UserTokenOrderByWithAggregationInputObjectSchema,
      UserTokenOrderByWithAggregationInputObjectSchema.array()
    ])
    .optional(),
  having: UserTokenScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(UserTokenScalarFieldEnumSchema)
})
