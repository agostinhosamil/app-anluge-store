import { z } from 'zod'
import { AdminInvitationCreateManyInputObjectSchema } from './objects/AdminInvitationCreateManyInput.schema'

export const AdminInvitationCreateManySchema = z.object({
  data: z.union([
    AdminInvitationCreateManyInputObjectSchema,
    z.array(AdminInvitationCreateManyInputObjectSchema)
  ]),
  skipDuplicates: z.boolean().optional()
})
