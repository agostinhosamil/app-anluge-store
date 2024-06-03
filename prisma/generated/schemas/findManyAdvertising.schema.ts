import { z } from 'zod'
import { AdvertisingOrderByWithRelationInputObjectSchema } from './objects/AdvertisingOrderByWithRelationInput.schema'
import { AdvertisingWhereInputObjectSchema } from './objects/AdvertisingWhereInput.schema'
import { AdvertisingWhereUniqueInputObjectSchema } from './objects/AdvertisingWhereUniqueInput.schema'
import { AdvertisingScalarFieldEnumSchema } from './enums/AdvertisingScalarFieldEnum.schema'

export const AdvertisingFindManySchema = z.object({
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
  distinct: z.array(AdvertisingScalarFieldEnumSchema).optional()
})
