import { z } from 'zod'
import { AdminInvitationWhereInputObjectSchema } from './objects/AdminInvitationWhereInput.schema'
import { AdminInvitationOrderByWithAggregationInputObjectSchema } from './objects/AdminInvitationOrderByWithAggregationInput.schema'
import { AdminInvitationScalarWhereWithAggregatesInputObjectSchema } from './objects/AdminInvitationScalarWhereWithAggregatesInput.schema'
import { AdminInvitationScalarFieldEnumSchema } from './enums/AdminInvitationScalarFieldEnum.schema'

export const AdminInvitationGroupBySchema = z.object({
  where: AdminInvitationWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      AdminInvitationOrderByWithAggregationInputObjectSchema,
      AdminInvitationOrderByWithAggregationInputObjectSchema.array()
    ])
    .optional(),
  having: AdminInvitationScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AdminInvitationScalarFieldEnumSchema)
})
