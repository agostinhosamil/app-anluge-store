import { z } from 'zod'

export const SessionScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'expires',
  'sessionToken',
  'accessToken',
  'createdAt',
  'updatedAt'
])
