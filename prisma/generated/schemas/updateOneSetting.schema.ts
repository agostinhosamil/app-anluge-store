import { z } from 'zod'
import { SettingUpdateInputObjectSchema } from './objects/SettingUpdateInput.schema'
import { SettingUncheckedUpdateInputObjectSchema } from './objects/SettingUncheckedUpdateInput.schema'
import { SettingWhereUniqueInputObjectSchema } from './objects/SettingWhereUniqueInput.schema'

export const SettingUpdateOneSchema = z.object({
  data: z.union([
    SettingUpdateInputObjectSchema,
    SettingUncheckedUpdateInputObjectSchema
  ]),
  where: SettingWhereUniqueInputObjectSchema
})
