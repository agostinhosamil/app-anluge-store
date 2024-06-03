import { z } from 'zod'
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'
import { ProductCreateWithoutOrderInputObjectSchema } from './ProductCreateWithoutOrderInput.schema'
import { ProductUncheckedCreateWithoutOrderInputObjectSchema } from './ProductUncheckedCreateWithoutOrderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutOrderInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutOrderInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutOrderInputObjectSchema)
    ])
  })
  .strict()

export const ProductCreateOrConnectWithoutOrderInputObjectSchema = Schema
