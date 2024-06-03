import { z } from 'zod'
import { AdminInvitationOrderByWithRelationInputObjectSchema } from './objects/AdminInvitationOrderByWithRelationInput.schema'
import { AdminInvitationWhereInputObjectSchema } from './objects/AdminInvitationWhereInput.schema'
import { AdminInvitationWhereUniqueInputObjectSchema } from './objects/AdminInvitationWhereUniqueInput.schema'
import { AdminInvitationScalarFieldEnumSchema } from './enums/AdminInvitationScalarFieldEnum.schema'

export const AdminInvitationFindFirstSchema = z.object({
  orderBy: z
    .union([
      AdminInvitationOrderByWithRelationInputObjectSchema,
      AdminInvitationOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: AdminInvitationWhereInputObjectSchema.optional(),
  cursor: AdminInvitationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AdminInvitationScalarFieldEnumSchema).optional()
})
