import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AdminInvitationWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AdminInvitationWhereInputObjectSchema),
        z.lazy(() => AdminInvitationWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => AdminInvitationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AdminInvitationWhereInputObjectSchema),
        z.lazy(() => AdminInvitationWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    roleId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    expires: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional()
  })
  .strict()

export const AdminInvitationWhereInputObjectSchema = Schema
