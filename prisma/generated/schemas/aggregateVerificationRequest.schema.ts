import { z } from 'zod'
import { VerificationRequestOrderByWithRelationInputObjectSchema } from './objects/VerificationRequestOrderByWithRelationInput.schema'
import { VerificationRequestWhereInputObjectSchema } from './objects/VerificationRequestWhereInput.schema'
import { VerificationRequestWhereUniqueInputObjectSchema } from './objects/VerificationRequestWhereUniqueInput.schema'
import { VerificationRequestCountAggregateInputObjectSchema } from './objects/VerificationRequestCountAggregateInput.schema'
import { VerificationRequestMinAggregateInputObjectSchema } from './objects/VerificationRequestMinAggregateInput.schema'
import { VerificationRequestMaxAggregateInputObjectSchema } from './objects/VerificationRequestMaxAggregateInput.schema'

export const VerificationRequestAggregateSchema = z.object({
  orderBy: z
    .union([
      VerificationRequestOrderByWithRelationInputObjectSchema,
      VerificationRequestOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: VerificationRequestWhereInputObjectSchema.optional(),
  cursor: VerificationRequestWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([
      z.literal(true),
      VerificationRequestCountAggregateInputObjectSchema
    ])
    .optional(),
  _min: VerificationRequestMinAggregateInputObjectSchema.optional(),
  _max: VerificationRequestMaxAggregateInputObjectSchema.optional()
})
