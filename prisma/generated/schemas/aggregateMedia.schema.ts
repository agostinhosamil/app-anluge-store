import { z } from 'zod'
import { MediaOrderByWithRelationInputObjectSchema } from './objects/MediaOrderByWithRelationInput.schema'
import { MediaWhereInputObjectSchema } from './objects/MediaWhereInput.schema'
import { MediaWhereUniqueInputObjectSchema } from './objects/MediaWhereUniqueInput.schema'
import { MediaCountAggregateInputObjectSchema } from './objects/MediaCountAggregateInput.schema'
import { MediaMinAggregateInputObjectSchema } from './objects/MediaMinAggregateInput.schema'
import { MediaMaxAggregateInputObjectSchema } from './objects/MediaMaxAggregateInput.schema'

export const MediaAggregateSchema = z.object({
  orderBy: z
    .union([
      MediaOrderByWithRelationInputObjectSchema,
      MediaOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: MediaWhereInputObjectSchema.optional(),
  cursor: MediaWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), MediaCountAggregateInputObjectSchema])
    .optional(),
  _min: MediaMinAggregateInputObjectSchema.optional(),
  _max: MediaMaxAggregateInputObjectSchema.optional()
})
