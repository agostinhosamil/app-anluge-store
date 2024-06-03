import { z } from 'zod'
import { ProductCreateWithoutFaqsInputObjectSchema } from './ProductCreateWithoutFaqsInput.schema'
import { ProductUncheckedCreateWithoutFaqsInputObjectSchema } from './ProductUncheckedCreateWithoutFaqsInput.schema'
import { ProductCreateOrConnectWithoutFaqsInputObjectSchema } from './ProductCreateOrConnectWithoutFaqsInput.schema'
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutFaqsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutFaqsInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutFaqsInputObjectSchema)
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProductCreateOrConnectWithoutFaqsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
  })
  .strict()

export const ProductCreateNestedOneWithoutFaqsInputObjectSchema = Schema
