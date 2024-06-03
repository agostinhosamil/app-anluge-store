import { z } from 'zod'

export const CartScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'userId'
])
