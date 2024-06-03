import { z } from 'zod'
import { VerificationRequestOrderByWithRelationInputObjectSchema } from './objects/VerificationRequestOrderByWithRelationInput.schema'
import { VerificationRequestWhereInputObjectSchema } from './objects/VerificationRequestWhereInput.schema'
import { VerificationRequestWhereUniqueInputObjectSchema } from './objects/VerificationRequestWhereUniqueInput.schema'
import { VerificationRequestScalarFieldEnumSchema } from './enums/VerificationRequestScalarFieldEnum.schema'

export const VerificationRequestFindManySchema = z.object({
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
  distinct: z.array(VerificationRequestScalarFieldEnumSchema).optional()
})
