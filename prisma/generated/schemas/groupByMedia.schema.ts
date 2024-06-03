import { z } from 'zod'
import { MediaWhereInputObjectSchema } from './objects/MediaWhereInput.schema'
import { MediaOrderByWithAggregationInputObjectSchema } from './objects/MediaOrderByWithAggregationInput.schema'
import { MediaScalarWhereWithAggregatesInputObjectSchema } from './objects/MediaScalarWhereWithAggregatesInput.schema'
import { MediaScalarFieldEnumSchema } from './enums/MediaScalarFieldEnum.schema'

export const MediaGroupBySchema = z.object({
  where: MediaWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MediaOrderByWithAggregationInputObjectSchema,
      MediaOrderByWithAggregationInputObjectSchema.array()
    ])
    .optional(),
  having: MediaScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MediaScalarFieldEnumSchema)
})
