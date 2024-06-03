import { z } from 'zod'
import { SettingWhereUniqueInputObjectSchema } from './objects/SettingWhereUniqueInput.schema'

export const SettingDeleteOneSchema = z.object({
  where: SettingWhereUniqueInputObjectSchema
})
