import { z } from 'zod'

export const RoleScalarFieldEnumSchema = z.enum([
  'id',
  'key',
  'name',
  'description',
  'createdAt',
  'updatedAt'
])
