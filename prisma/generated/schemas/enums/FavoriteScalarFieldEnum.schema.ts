import { z } from 'zod'

export const FavoriteScalarFieldEnumSchema = z.enum([
  'id',
  'productId',
  'userId'
])
