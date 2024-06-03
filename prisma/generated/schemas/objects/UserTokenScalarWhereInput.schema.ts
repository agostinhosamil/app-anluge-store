import { z } from 'zod'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserTokenScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserTokenScalarWhereInputObjectSchema),
        z.lazy(() => UserTokenScalarWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => UserTokenScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserTokenScalarWhereInputObjectSchema),
        z.lazy(() => UserTokenScalarWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    body: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional()
  })
  .strict()

export const UserTokenScalarWhereInputObjectSchema = Schema
