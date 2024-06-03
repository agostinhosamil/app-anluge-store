import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VerificationRequestWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VerificationRequestWhereInputObjectSchema),
        z.lazy(() => VerificationRequestWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => VerificationRequestWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VerificationRequestWhereInputObjectSchema),
        z.lazy(() => VerificationRequestWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    identifier: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    token: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
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

export const VerificationRequestWhereInputObjectSchema = Schema
