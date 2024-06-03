import { z } from 'zod'
import { ProductCreateNestedOneWithoutOrderInputObjectSchema } from './ProductCreateNestedOneWithoutOrderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrderCreateWithoutCartInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    product: z.lazy(() => ProductCreateNestedOneWithoutOrderInputObjectSchema)
  })
  .strict()

export const OrderCreateWithoutCartInputObjectSchema = Schema
