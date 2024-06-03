import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VerificationRequestScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => VerificationRequestScalarWhereWithAggregatesInputObjectSchema
          ),
          z
            .lazy(
              () =>
                VerificationRequestScalarWhereWithAggregatesInputObjectSchema
            )
            .array()
        ])
        .optional(),
      OR: z
        .lazy(
          () => VerificationRequestScalarWhereWithAggregatesInputObjectSchema
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => VerificationRequestScalarWhereWithAggregatesInputObjectSchema
          ),
          z
            .lazy(
              () =>
                VerificationRequestScalarWhereWithAggregatesInputObjectSchema
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
      identifier: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string()
        ])
        .optional(),
      token: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string()
        ])
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

export const VerificationRequestScalarWhereWithAggregatesInputObjectSchema =
  Schema
