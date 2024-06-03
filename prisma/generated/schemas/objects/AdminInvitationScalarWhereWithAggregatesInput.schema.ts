import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AdminInvitationScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => AdminInvitationScalarWhereWithAggregatesInputObjectSchema
          ),
          z
            .lazy(
              () => AdminInvitationScalarWhereWithAggregatesInputObjectSchema
            )
            .array()
        ])
        .optional(),
      OR: z
        .lazy(() => AdminInvitationScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => AdminInvitationScalarWhereWithAggregatesInputObjectSchema
          ),
          z
            .lazy(
              () => AdminInvitationScalarWhereWithAggregatesInputObjectSchema
            )
            .array()
        ])
        .optional(),
      id: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string()
        ])
        .optional(),
      userId: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string()
        ])
        .optional(),
      email: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string()
        ])
        .optional(),
      roleId: z
        .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
        .optional(),
      expires: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.coerce.date()
        ])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.coerce.date()
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.coerce.date()
        ])
        .optional()
    })
    .strict()

export const AdminInvitationScalarWhereWithAggregatesInputObjectSchema = Schema
