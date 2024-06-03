import { z } from 'zod'
import { CartCreateWithoutOrdersInputObjectSchema } from './CartCreateWithoutOrdersInput.schema'
import { CartUncheckedCreateWithoutOrdersInputObjectSchema } from './CartUncheckedCreateWithoutOrdersInput.schema'
import { CartCreateOrConnectWithoutOrdersInputObjectSchema } from './CartCreateOrConnectWithoutOrdersInput.schema'
import { CartUpsertWithoutOrdersInputObjectSchema } from './CartUpsertWithoutOrdersInput.schema'
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema'
import { CartUpdateWithoutOrdersInputObjectSchema } from './CartUpdateWithoutOrdersInput.schema'
import { CartUncheckedUpdateWithoutOrdersInputObjectSchema } from './CartUncheckedUpdateWithoutOrdersInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CartUpdateOneWithoutOrdersNestedInput> = z
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
    upsert: z.lazy(() => CartUpsertWithoutOrdersInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => CartWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => CartUpdateWithoutOrdersInputObjectSchema),
        z.lazy(() => CartUncheckedUpdateWithoutOrdersInputObjectSchema)
      ])
      .optional()
  })
  .strict()

export const CartUpdateOneWithoutOrdersNestedInputObjectSchema = Schema
