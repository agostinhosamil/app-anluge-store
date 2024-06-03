import { z } from 'zod'
import { FaqOrderByWithRelationInputObjectSchema } from './objects/FaqOrderByWithRelationInput.schema'
import { FaqWhereInputObjectSchema } from './objects/FaqWhereInput.schema'
import { FaqWhereUniqueInputObjectSchema } from './objects/FaqWhereUniqueInput.schema'
import { FaqCountAggregateInputObjectSchema } from './objects/FaqCountAggregateInput.schema'
import { FaqMinAggregateInputObjectSchema } from './objects/FaqMinAggregateInput.schema'
import { FaqMaxAggregateInputObjectSchema } from './objects/FaqMaxAggregateInput.schema'

export const FaqAggregateSchema = z.object({
  orderBy: z
    .union([
      FaqOrderByWithRelationInputObjectSchema,
      FaqOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: FaqWhereInputObjectSchema.optional(),
  cursor: FaqWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), FaqCountAggregateInputObjectSchema])
    .optional(),
  _min: FaqMinAggregateInputObjectSchema.optional(),
  _max: FaqMaxAggregateInputObjectSchema.optional()
})
