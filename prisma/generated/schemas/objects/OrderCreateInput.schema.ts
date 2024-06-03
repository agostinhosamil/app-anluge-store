import { z } from 'zod'
import { ProductCreateNestedOneWithoutOrderInputObjectSchema } from './ProductCreateNestedOneWithoutOrderInput.schema'
import { CartCreateNestedOneWithoutOrdersInputObjectSchema } from './CartCreateNestedOneWithoutOrdersInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.OrderCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    product: z.lazy(() => ProductCreateNestedOneWithoutOrderInputObjectSchema),
    Cart: z
      .lazy(() => CartCreateNestedOneWithoutOrdersInputObjectSchema)
      .optional()
  })
  .strict()

export const OrderCreateInputObjectSchema = Schema
