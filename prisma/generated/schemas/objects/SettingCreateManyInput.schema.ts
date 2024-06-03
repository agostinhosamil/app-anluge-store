import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SettingCreateManyInput> = z
  .object({
    id: z.number().optional(),
    property: z.string(),
    value: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
  })
  .strict()

export const SettingCreateManyInputObjectSchema = Schema
