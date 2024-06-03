import { z } from 'zod'

export const AccountScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'providerType',
  'providerId',
  'providerAccountId',
  'refreshToken',
  'accessToken',
  'accessTokenExpires',
  'createdAt',
  'updatedAt'
])
