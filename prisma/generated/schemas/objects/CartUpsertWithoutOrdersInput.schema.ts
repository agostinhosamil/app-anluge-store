import { z } from 'zod'
import { CartUpdateWithoutOrdersInputObjectSchema } from './CartUpdateWithoutOrdersInput.schema'
import { CartUncheckedUpdateWithoutOrdersInputObjectSchema } from './CartUncheckedUpdateWithoutOrdersInput.schema'
import { CartCreateWithoutOrdersInputObjectSchema } from './CartCreateWithoutOrdersInput.schema'
import { CartUncheckedCreateWithoutOrdersInputObjectSchema } from './CartUncheckedCreateWithoutOrdersInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CartUpsertWithoutOrdersInput> = z
  .object({
    update: z.union([
      z.lazy(() => CartUpdateWithoutOrdersInputObjectSchema),
      z.lazy(() => CartUncheckedUpdateWithoutOrdersInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => CartCreateWithoutOrdersInputObjectSchema),
      z.lazy(() => CartUncheckedCreateWithoutOrdersInputObjectSchema)
    ])
  })
  .strict()

export const CartUpsertWithoutOrdersInputObjectSchema = Schema
