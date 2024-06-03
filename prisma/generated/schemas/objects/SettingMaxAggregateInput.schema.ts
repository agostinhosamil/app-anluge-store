import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SettingMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    property: z.literal(true).optional(),
    value: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional()
  })
  .strict()

export const SettingMaxAggregateInputObjectSchema = Schema
