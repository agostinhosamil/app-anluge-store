import { z } from 'zod'
import { VerificationRequestWhereInputObjectSchema } from './objects/VerificationRequestWhereInput.schema'
import { VerificationRequestOrderByWithAggregationInputObjectSchema } from './objects/VerificationRequestOrderByWithAggregationInput.schema'
import { VerificationRequestScalarWhereWithAggregatesInputObjectSchema } from './objects/VerificationRequestScalarWhereWithAggregatesInput.schema'
import { VerificationRequestScalarFieldEnumSchema } from './enums/VerificationRequestScalarFieldEnum.schema'

export const VerificationRequestGroupBySchema = z.object({
  where: VerificationRequestWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      VerificationRequestOrderByWithAggregationInputObjectSchema,
      VerificationRequestOrderByWithAggregationInputObjectSchema.array()
    ])
    .optional(),
  having:
    VerificationRequestScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(VerificationRequestScalarFieldEnumSchema)
})
