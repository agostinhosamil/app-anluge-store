import { z } from 'zod'
import { SettingWhereUniqueInputObjectSchema } from './objects/SettingWhereUniqueInput.schema'

export const SettingFindUniqueSchema = z.object({
  where: SettingWhereUniqueInputObjectSchema
})
