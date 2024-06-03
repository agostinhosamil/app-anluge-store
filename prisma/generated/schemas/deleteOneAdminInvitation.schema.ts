import { z } from 'zod'
import { AdminInvitationWhereUniqueInputObjectSchema } from './objects/AdminInvitationWhereUniqueInput.schema'

export const AdminInvitationDeleteOneSchema = z.object({
  where: AdminInvitationWhereUniqueInputObjectSchema
})
