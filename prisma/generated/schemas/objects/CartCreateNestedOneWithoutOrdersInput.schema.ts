import { z } from 'zod'
import { CartCreateWithoutOrdersInputObjectSchema } from './CartCreateWithoutOrdersInput.schema'
import { CartUncheckedCreateWithoutOrdersInputObjectSchema } from './CartUncheckedCreateWithoutOrdersInput.schema'
import { CartCreateOrConnectWithoutOrdersInputObjectSchema } from './CartCreateOrConnectWithoutOrdersInput.schema'
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CartCreateNestedOneWithoutOrdersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CartCreateWithoutOrdersInputObjectSchema),
        z.lazy(() => CartUncheckedCreateWithoutOrdersInputObjectSchema)
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CartCreateOrConnectWithoutOrdersInputObjectSchema)
      .optional(),
    connect: z.lazy(() => CartWhereUniqueInputObjectSchema).optional()
  })
  .strict()

export const CartCreateNestedOneWithoutOrdersInputObjectSchema = Schema
