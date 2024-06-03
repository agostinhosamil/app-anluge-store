import { z } from 'zod'
import { AdminInvitationOrderByWithRelationInputObjectSchema } from './objects/AdminInvitationOrderByWithRelationInput.schema'
import { AdminInvitationWhereInputObjectSchema } from './objects/AdminInvitationWhereInput.schema'
import { AdminInvitationWhereUniqueInputObjectSchema } from './objects/AdminInvitationWhereUniqueInput.schema'
import { AdminInvitationCountAggregateInputObjectSchema } from './objects/AdminInvitationCountAggregateInput.schema'
import { AdminInvitationMinAggregateInputObjectSchema } from './objects/AdminInvitationMinAggregateInput.schema'
import { AdminInvitationMaxAggregateInputObjectSchema } from './objects/AdminInvitationMaxAggregateInput.schema'
import { AdminInvitationAvgAggregateInputObjectSchema } from './objects/AdminInvitationAvgAggregateInput.schema'
import { AdminInvitationSumAggregateInputObjectSchema } from './objects/AdminInvitationSumAggregateInput.schema'

export const AdminInvitationAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), AdminInvitationCountAggregateInputObjectSchema])
    .optional(),
  _min: AdminInvitationMinAggregateInputObjectSchema.optional(),
  _max: AdminInvitationMaxAggregateInputObjectSchema.optional(),
  _avg: AdminInvitationAvgAggregateInputObjectSchema.optional(),
  _sum: AdminInvitationSumAggregateInputObjectSchema.optional()
})
