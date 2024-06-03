import { z } from 'zod'

export const AdvertisingScalarFieldEnumSchema = z.enum([
  'id',
  'expiresAt',
  'banner',
  'link',
  'title',
  'createdAt',
  'updatedAt'
])
