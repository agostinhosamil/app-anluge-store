import { z } from 'zod'

export const TagScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'slag',
  'createdAt',
  'updatedAt'
])
