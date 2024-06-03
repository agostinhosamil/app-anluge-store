import { z } from 'zod'
import { SettingOrderByWithRelationInputObjectSchema } from './objects/SettingOrderByWithRelationInput.schema'
import { SettingWhereInputObjectSchema } from './objects/SettingWhereInput.schema'
import { SettingWhereUniqueInputObjectSchema } from './objects/SettingWhereUniqueInput.schema'
import { SettingCountAggregateInputObjectSchema } from './objects/SettingCountAggregateInput.schema'
import { SettingMinAggregateInputObjectSchema } from './objects/SettingMinAggregateInput.schema'
import { SettingMaxAggregateInputObjectSchema } from './objects/SettingMaxAggregateInput.schema'
import { SettingAvgAggregateInputObjectSchema } from './objects/SettingAvgAggregateInput.schema'
import { SettingSumAggregateInputObjectSchema } from './objects/SettingSumAggregateInput.schema'

export const SettingAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), SettingCountAggregateInputObjectSchema])
    .optional(),
  _min: SettingMinAggregateInputObjectSchema.optional(),
  _max: SettingMaxAggregateInputObjectSchema.optional(),
  _avg: SettingAvgAggregateInputObjectSchema.optional(),
  _sum: SettingSumAggregateInputObjectSchema.optional()
})
