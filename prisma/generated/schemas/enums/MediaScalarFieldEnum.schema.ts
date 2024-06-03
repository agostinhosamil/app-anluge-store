import { z } from 'zod'

export const MediaScalarFieldEnumSchema = z.enum([
  'id',
  'fileName',
  'type',
  'createdAt',
  'updatedAt',
  'productId',
  'rateId'
])
