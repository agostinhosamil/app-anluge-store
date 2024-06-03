import { z } from 'zod'
import { AdminInvitationUpdateManyMutationInputObjectSchema } from './objects/AdminInvitationUpdateManyMutationInput.schema'
import { AdminInvitationWhereInputObjectSchema } from './objects/AdminInvitationWhereInput.schema'

export const AdminInvitationUpdateManySchema = z.object({
  data: AdminInvitationUpdateManyMutationInputObjectSchema,
  where: AdminInvitationWhereInputObjectSchema.optional()
})
