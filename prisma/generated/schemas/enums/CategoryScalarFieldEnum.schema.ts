import { z } from 'zod'

export const CategoryScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'description',
  'slag',
  'icon',
  'parentId',
  'createdAt',
  'updatedAt'
])
