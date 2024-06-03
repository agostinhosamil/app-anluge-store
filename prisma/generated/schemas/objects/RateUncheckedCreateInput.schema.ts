import { z } from 'zod'
import { MediaUncheckedCreateNestedManyWithoutRateInputObjectSchema } from './MediaUncheckedCreateNestedManyWithoutRateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    message: z.string(),
    value: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string(),
    medias: z
      .lazy(() => MediaUncheckedCreateNestedManyWithoutRateInputObjectSchema)
      .optional()
  })
  .strict()

export const RateUncheckedCreateInputObjectSchema = Schema
