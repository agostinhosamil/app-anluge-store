import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrderUncheckedCreateWithoutCartInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    productId: z.string()
  })
  .strict()

export const OrderUncheckedCreateWithoutCartInputObjectSchema = Schema
