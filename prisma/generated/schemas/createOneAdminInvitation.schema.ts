import { z } from 'zod'
import { AdminInvitationCreateInputObjectSchema } from './objects/AdminInvitationCreateInput.schema'
import { AdminInvitationUncheckedCreateInputObjectSchema } from './objects/AdminInvitationUncheckedCreateInput.schema'

export const AdminInvitationCreateOneSchema = z.object({
  data: z.union([
    AdminInvitationCreateInputObjectSchema,
    AdminInvitationUncheckedCreateInputObjectSchema
  ])
})
