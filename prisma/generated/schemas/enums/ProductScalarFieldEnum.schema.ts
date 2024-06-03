import { z } from 'zod'

export const ProductScalarFieldEnumSchema = z.enum([
  'id',
  'code',
  'name',
  'summary',
  'description',
  'price',
  'slag',
  'stock',
  'sku',
  'barCode',
  'type',
  'createdAt',
  'updatedAt',
  'categoryId'
])
