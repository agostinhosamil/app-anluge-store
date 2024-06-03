import { z } from 'zod'
import { OrderCreateNestedManyWithoutCartInputObjectSchema } from './OrderCreateNestedManyWithoutCartInput.schema'
import { UserCreateNestedOneWithoutCartInputObjectSchema } from './UserCreateNestedOneWithoutCartInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CartCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    orders: z
      .lazy(() => OrderCreateNestedManyWithoutCartInputObjectSchema)
      .optional(),
    user: z
      .lazy(() => UserCreateNestedOneWithoutCartInputObjectSchema)
      .optional()
  })
  .strict()

export const CartCreateInputObjectSchema = Schema
