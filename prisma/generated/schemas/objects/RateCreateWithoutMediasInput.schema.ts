import { z } from 'zod'
import { UserCreateNestedOneWithoutRatesInputObjectSchema } from './UserCreateNestedOneWithoutRatesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateCreateWithoutMediasInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    message: z.string(),
    value: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutRatesInputObjectSchema)
  })
  .strict()

export const RateCreateWithoutMediasInputObjectSchema = Schema
