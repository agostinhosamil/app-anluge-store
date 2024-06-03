import { z } from 'zod'
import { ProductCreateWithoutOrderInputObjectSchema } from './ProductCreateWithoutOrderInput.schema'
import { ProductUncheckedCreateWithoutOrderInputObjectSchema } from './ProductUncheckedCreateWithoutOrderInput.schema'
import { ProductCreateOrConnectWithoutOrderInputObjectSchema } from './ProductCreateOrConnectWithoutOrderInput.schema'
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutOrderInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutOrderInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutOrderInputObjectSchema)
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProductCreateOrConnectWithoutOrderInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
  })
  .strict()

export const ProductCreateNestedOneWithoutOrderInputObjectSchema = Schema
