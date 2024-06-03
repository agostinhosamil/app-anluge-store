import { z } from 'zod'
import { FaqOrderByWithRelationInputObjectSchema } from './objects/FaqOrderByWithRelationInput.schema'
import { FaqWhereInputObjectSchema } from './objects/FaqWhereInput.schema'
import { FaqWhereUniqueInputObjectSchema } from './objects/FaqWhereUniqueInput.schema'
import { FaqScalarFieldEnumSchema } from './enums/FaqScalarFieldEnum.schema'

export const FaqFindManySchema = z.object({
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
  distinct: z.array(FaqScalarFieldEnumSchema).optional()
})
