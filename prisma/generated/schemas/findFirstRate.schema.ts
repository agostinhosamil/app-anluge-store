import { z } from 'zod'
import { RateOrderByWithRelationInputObjectSchema } from './objects/RateOrderByWithRelationInput.schema'
import { RateWhereInputObjectSchema } from './objects/RateWhereInput.schema'
import { RateWhereUniqueInputObjectSchema } from './objects/RateWhereUniqueInput.schema'
import { RateScalarFieldEnumSchema } from './enums/RateScalarFieldEnum.schema'

export const RateFindFirstSchema = z.object({
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
  distinct: z.array(RateScalarFieldEnumSchema).optional()
})
