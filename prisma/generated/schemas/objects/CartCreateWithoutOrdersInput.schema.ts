import { z } from 'zod'
import { UserCreateNestedOneWithoutCartInputObjectSchema } from './UserCreateNestedOneWithoutCartInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CartCreateWithoutOrdersInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z
      .lazy(() => UserCreateNestedOneWithoutCartInputObjectSchema)
      .optional()
  })
  .strict()

export const CartCreateWithoutOrdersInputObjectSchema = Schema
