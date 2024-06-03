import { z } from 'zod'
import { AdvertisingOrderByWithRelationInputObjectSchema } from './objects/AdvertisingOrderByWithRelationInput.schema'
import { AdvertisingWhereInputObjectSchema } from './objects/AdvertisingWhereInput.schema'
import { AdvertisingWhereUniqueInputObjectSchema } from './objects/AdvertisingWhereUniqueInput.schema'
import { AdvertisingCountAggregateInputObjectSchema } from './objects/AdvertisingCountAggregateInput.schema'
import { AdvertisingMinAggregateInputObjectSchema } from './objects/AdvertisingMinAggregateInput.schema'
import { AdvertisingMaxAggregateInputObjectSchema } from './objects/AdvertisingMaxAggregateInput.schema'

export const AdvertisingAggregateSchema = z.object({
  orderBy: z
    .union([
      AdvertisingOrderByWithRelationInputObjectSchema,
      AdvertisingOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: AdvertisingWhereInputObjectSchema.optional(),
  cursor: AdvertisingWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), AdvertisingCountAggregateInputObjectSchema])
    .optional(),
  _min: AdvertisingMinAggregateInputObjectSchema.optional(),
  _max: AdvertisingMaxAggregateInputObjectSchema.optional()
})
