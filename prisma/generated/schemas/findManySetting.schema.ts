import { z } from 'zod'
import { SettingOrderByWithRelationInputObjectSchema } from './objects/SettingOrderByWithRelationInput.schema'
import { SettingWhereInputObjectSchema } from './objects/SettingWhereInput.schema'
import { SettingWhereUniqueInputObjectSchema } from './objects/SettingWhereUniqueInput.schema'
import { SettingScalarFieldEnumSchema } from './enums/SettingScalarFieldEnum.schema'

export const SettingFindManySchema = z.object({
  orderBy: z
    .union([
      SettingOrderByWithRelationInputObjectSchema,
      SettingOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: SettingWhereInputObjectSchema.optional(),
  cursor: SettingWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SettingScalarFieldEnumSchema).optional()
})
