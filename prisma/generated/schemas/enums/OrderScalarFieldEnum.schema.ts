import { z } from 'zod'

export const OrderScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'cartId',
  'productId'
])
