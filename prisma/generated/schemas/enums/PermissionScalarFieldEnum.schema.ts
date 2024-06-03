import { z } from 'zod'

export const PermissionScalarFieldEnumSchema = z.enum([
  'id',
  'key',
  'name',
  'description',
  'createdAt',
  'updatedAt'
])
