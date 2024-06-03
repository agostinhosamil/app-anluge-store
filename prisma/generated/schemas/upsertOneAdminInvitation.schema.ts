import { z } from 'zod'
import { AdminInvitationWhereUniqueInputObjectSchema } from './objects/AdminInvitationWhereUniqueInput.schema'
import { AdminInvitationCreateInputObjectSchema } from './objects/AdminInvitationCreateInput.schema'
import { AdminInvitationUncheckedCreateInputObjectSchema } from './objects/AdminInvitationUncheckedCreateInput.schema'
import { AdminInvitationUpdateInputObjectSchema } from './objects/AdminInvitationUpdateInput.schema'
import { AdminInvitationUncheckedUpdateInputObjectSchema } from './objects/AdminInvitationUncheckedUpdateInput.schema'

export const AdminInvitationUpsertSchema = z.object({
  where: AdminInvitationWhereUniqueInputObjectSchema,
  create: z.union([
    AdminInvitationCreateInputObjectSchema,
    AdminInvitationUncheckedCreateInputObjectSchema
  ]),
  update: z.union([
    AdminInvitationUpdateInputObjectSchema,
    AdminInvitationUncheckedUpdateInputObjectSchema
  ])
})
