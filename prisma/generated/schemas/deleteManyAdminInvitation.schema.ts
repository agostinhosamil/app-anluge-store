import { z } from 'zod'
import { AdminInvitationWhereInputObjectSchema } from './objects/AdminInvitationWhereInput.schema'

export const AdminInvitationDeleteManySchema = z.object({
  where: AdminInvitationWhereInputObjectSchema.optional()
})
