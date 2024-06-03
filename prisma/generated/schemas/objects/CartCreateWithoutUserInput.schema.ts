import { z } from 'zod'
import { OrderCreateNestedManyWithoutCartInputObjectSchema } from './OrderCreateNestedManyWithoutCartInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CartCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    orders: z
      .lazy(() => OrderCreateNestedManyWithoutCartInputObjectSchema)
      .optional()
  })
  .strict()

export const CartCreateWithoutUserInputObjectSchema = Schema
