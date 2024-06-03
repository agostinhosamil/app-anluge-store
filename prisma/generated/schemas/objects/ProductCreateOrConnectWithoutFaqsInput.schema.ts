import { z } from 'zod'
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'
import { ProductCreateWithoutFaqsInputObjectSchema } from './ProductCreateWithoutFaqsInput.schema'
import { ProductUncheckedCreateWithoutFaqsInputObjectSchema } from './ProductUncheckedCreateWithoutFaqsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutFaqsInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutFaqsInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutFaqsInputObjectSchema)
    ])
  })
  .strict()

export const ProductCreateOrConnectWithoutFaqsInputObjectSchema = Schema
