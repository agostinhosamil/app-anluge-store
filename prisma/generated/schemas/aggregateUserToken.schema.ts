import { z } from 'zod'
import { UserTokenOrderByWithRelationInputObjectSchema } from './objects/UserTokenOrderByWithRelationInput.schema'
import { UserTokenWhereInputObjectSchema } from './objects/UserTokenWhereInput.schema'
import { UserTokenWhereUniqueInputObjectSchema } from './objects/UserTokenWhereUniqueInput.schema'
import { UserTokenCountAggregateInputObjectSchema } from './objects/UserTokenCountAggregateInput.schema'
import { UserTokenMinAggregateInputObjectSchema } from './objects/UserTokenMinAggregateInput.schema'
import { UserTokenMaxAggregateInputObjectSchema } from './objects/UserTokenMaxAggregateInput.schema'
import { UserTokenAvgAggregateInputObjectSchema } from './objects/UserTokenAvgAggregateInput.schema'
import { UserTokenSumAggregateInputObjectSchema } from './objects/UserTokenSumAggregateInput.schema'

export const UserTokenAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), UserTokenCountAggregateInputObjectSchema])
    .optional(),
  _min: UserTokenMinAggregateInputObjectSchema.optional(),
  _max: UserTokenMaxAggregateInputObjectSchema.optional(),
  _avg: UserTokenAvgAggregateInputObjectSchema.optional(),
  _sum: UserTokenSumAggregateInputObjectSchema.optional()
})
