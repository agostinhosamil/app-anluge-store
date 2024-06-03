import { z } from 'zod'
import { AdvertisingWhereInputObjectSchema } from './objects/AdvertisingWhereInput.schema'
import { AdvertisingOrderByWithAggregationInputObjectSchema } from './objects/AdvertisingOrderByWithAggregationInput.schema'
import { AdvertisingScalarWhereWithAggregatesInputObjectSchema } from './objects/AdvertisingScalarWhereWithAggregatesInput.schema'
import { AdvertisingScalarFieldEnumSchema } from './enums/AdvertisingScalarFieldEnum.schema'

export const AdvertisingGroupBySchema = z.object({
  where: AdvertisingWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      AdvertisingOrderByWithAggregationInputObjectSchema,
      AdvertisingOrderByWithAggregationInputObjectSchema.array()
    ])
    .optional(),
  having: AdvertisingScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AdvertisingScalarFieldEnumSchema)
})
