import { z } from 'zod'
import { UserCreateNestedOneWithoutRatesInputObjectSchema } from './UserCreateNestedOneWithoutRatesInput.schema'
import { MediaCreateNestedManyWithoutRateInputObjectSchema } from './MediaCreateNestedManyWithoutRateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    message: z.string(),
    value: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutRatesInputObjectSchema),
    medias: z
      .lazy(() => MediaCreateNestedManyWithoutRateInputObjectSchema)
      .optional()
  })
  .strict()

export const RateCreateInputObjectSchema = Schema
