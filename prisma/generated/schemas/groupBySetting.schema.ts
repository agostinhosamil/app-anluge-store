import { z } from 'zod'
import { SettingWhereInputObjectSchema } from './objects/SettingWhereInput.schema'
import { SettingOrderByWithAggregationInputObjectSchema } from './objects/SettingOrderByWithAggregationInput.schema'
import { SettingScalarWhereWithAggregatesInputObjectSchema } from './objects/SettingScalarWhereWithAggregatesInput.schema'
import { SettingScalarFieldEnumSchema } from './enums/SettingScalarFieldEnum.schema'

export const SettingGroupBySchema = z.object({
  where: SettingWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      SettingOrderByWithAggregationInputObjectSchema,
      SettingOrderByWithAggregationInputObjectSchema.array()
    ])
    .optional(),
  having: SettingScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SettingScalarFieldEnumSchema)
})
