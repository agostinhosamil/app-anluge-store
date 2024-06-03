import { z } from 'zod'
import { OrderUncheckedCreateNestedManyWithoutCartInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutCartInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CartUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string(),
    orders: z
      .lazy(() => OrderUncheckedCreateNestedManyWithoutCartInputObjectSchema)
      .optional()
  })
  .strict()

export const CartUncheckedCreateInputObjectSchema = Schema
