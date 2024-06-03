import { z } from 'zod'
import { AdminInvitationWhereUniqueInputObjectSchema } from './objects/AdminInvitationWhereUniqueInput.schema'

export const AdminInvitationFindUniqueSchema = z.object({
  where: AdminInvitationWhereUniqueInputObjectSchema
})
