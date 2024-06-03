import { z } from 'zod'
import { AdminInvitationUpdateInputObjectSchema } from './objects/AdminInvitationUpdateInput.schema'
import { AdminInvitationUncheckedUpdateInputObjectSchema } from './objects/AdminInvitationUncheckedUpdateInput.schema'
import { AdminInvitationWhereUniqueInputObjectSchema } from './objects/AdminInvitationWhereUniqueInput.schema'

export const AdminInvitationUpdateOneSchema = z.object({
  data: z.union([
    AdminInvitationUpdateInputObjectSchema,
    AdminInvitationUncheckedUpdateInputObjectSchema
  ]),
  where: AdminInvitationWhereUniqueInputObjectSchema
})
