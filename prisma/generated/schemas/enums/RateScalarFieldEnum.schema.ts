import { z } from 'zod'

export const RateScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'message',
  'value',
  'createdAt',
  'updatedAt',
  'userId'
])
