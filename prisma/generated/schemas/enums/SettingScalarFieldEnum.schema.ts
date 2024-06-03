import { z } from 'zod'

export const SettingScalarFieldEnumSchema = z.enum([
  'id',
  'property',
  'value',
  'createdAt',
  'updatedAt'
])
