import { z } from 'zod'

export const AdminInvitationScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'email',
  'roleId',
  'expires',
  'createdAt',
  'updatedAt'
])
