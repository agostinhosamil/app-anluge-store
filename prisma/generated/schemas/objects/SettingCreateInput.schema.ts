import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SettingCreateInput> = z
  .object({
    property: z.string(),
    value: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
  })
  .strict()

export const SettingCreateInputObjectSchema = Schema
