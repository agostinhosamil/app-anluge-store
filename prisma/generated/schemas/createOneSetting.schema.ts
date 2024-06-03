import { z } from 'zod'
import { SettingCreateInputObjectSchema } from './objects/SettingCreateInput.schema'
import { SettingUncheckedCreateInputObjectSchema } from './objects/SettingUncheckedCreateInput.schema'

export const SettingCreateOneSchema = z.object({
  data: z.union([
    SettingCreateInputObjectSchema,
    SettingUncheckedCreateInputObjectSchema
  ])
})
