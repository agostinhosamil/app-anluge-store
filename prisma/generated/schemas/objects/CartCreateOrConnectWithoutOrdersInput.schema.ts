import { z } from 'zod'
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema'
import { CartCreateWithoutOrdersInputObjectSchema } from './CartCreateWithoutOrdersInput.schema'
import { CartUncheckedCreateWithoutOrdersInputObjectSchema } from './CartUncheckedCreateWithoutOrdersInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CartCreateOrConnectWithoutOrdersInput> = z
  .object({
    where: z.lazy(() => CartWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CartCreateWithoutOrdersInputObjectSchema),
      z.lazy(() => CartUncheckedCreateWithoutOrdersInputObjectSchema)
    ])
  })
  .strict()

export const CartCreateOrConnectWithoutOrdersInputObjectSchema = Schema
