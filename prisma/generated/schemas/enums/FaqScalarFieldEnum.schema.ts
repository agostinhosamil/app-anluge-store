import { z } from 'zod'

export const FaqScalarFieldEnumSchema = z.enum([
  'id',
  'question',
  'answer',
  'published',
  'createdAt',
  'updatedAt',
  'productId',
  'userId'
])
