import { z } from 'zod'
import { CartCreateNestedOneWithoutOrdersInputObjectSchema } from './CartCreateNestedOneWithoutOrdersInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrderCreateWithoutProductInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    Cart: z
      .lazy(() => CartCreateNestedOneWithoutOrdersInputObjectSchema)
      .optional()
  })
  .strict()

export const OrderCreateWithoutProductInputObjectSchema = Schema
