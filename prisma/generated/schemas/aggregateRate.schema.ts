import { z } from 'zod'
import { RateOrderByWithRelationInputObjectSchema } from './objects/RateOrderByWithRelationInput.schema'
import { RateWhereInputObjectSchema } from './objects/RateWhereInput.schema'
import { RateWhereUniqueInputObjectSchema } from './objects/RateWhereUniqueInput.schema'
import { RateCountAggregateInputObjectSchema } from './objects/RateCountAggregateInput.schema'
import { RateMinAggregateInputObjectSchema } from './objects/RateMinAggregateInput.schema'
import { RateMaxAggregateInputObjectSchema } from './objects/RateMaxAggregateInput.schema'
import { RateAvgAggregateInputObjectSchema } from './objects/RateAvgAggregateInput.schema'
import { RateSumAggregateInputObjectSchema } from './objects/RateSumAggregateInput.schema'

export const RateAggregateSchema = z.object({
  orderBy: z
    .union([
      RateOrderByWithRelationInputObjectSchema,
      RateOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: RateWhereInputObjectSchema.optional(),
  cursor: RateWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), RateCountAggregateInputObjectSchema])
    .optional(),
  _min: RateMinAggregateInputObjectSchema.optional(),
  _max: RateMaxAggregateInputObjectSchema.optional(),
  _avg: RateAvgAggregateInputObjectSchema.optional(),
  _sum: RateSumAggregateInputObjectSchema.optional()
})
