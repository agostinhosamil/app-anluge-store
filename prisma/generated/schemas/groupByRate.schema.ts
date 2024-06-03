import { z } from 'zod'
import { RateWhereInputObjectSchema } from './objects/RateWhereInput.schema'
import { RateOrderByWithAggregationInputObjectSchema } from './objects/RateOrderByWithAggregationInput.schema'
import { RateScalarWhereWithAggregatesInputObjectSchema } from './objects/RateScalarWhereWithAggregatesInput.schema'
import { RateScalarFieldEnumSchema } from './enums/RateScalarFieldEnum.schema'

export const RateGroupBySchema = z.object({
  where: RateWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      RateOrderByWithAggregationInputObjectSchema,
      RateOrderByWithAggregationInputObjectSchema.array()
    ])
    .optional(),
  having: RateScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RateScalarFieldEnumSchema)
})
