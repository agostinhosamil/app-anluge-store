import { z } from 'zod'

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'email',
  'password',
  'phone',
  'username',
  'emailVerified',
  'image',
  'roleId',
  'createdAt',
  'updatedAt'
])
