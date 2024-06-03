import { z } from 'zod'

export const UserTokenScalarFieldEnumSchema = z.enum([
  'id',
  'body',
  'userId',
  'createdAt',
  'updatedAt'
])
