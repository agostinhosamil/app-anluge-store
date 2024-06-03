import { z } from 'zod'
import { ProductCreateWithoutFaqsInputObjectSchema } from './ProductCreateWithoutFaqsInput.schema'
import { ProductUncheckedCreateWithoutFaqsInputObjectSchema } from './ProductUncheckedCreateWithoutFaqsInput.schema'
import { ProductCreateOrConnectWithoutFaqsInputObjectSchema } from './ProductCreateOrConnectWithoutFaqsInput.schema'
import { ProductUpsertWithoutFaqsInputObjectSchema } from './ProductUpsertWithoutFaqsInput.schema'
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'
import { ProductUpdateWithoutFaqsInputObjectSchema } from './ProductUpdateWithoutFaqsInput.schema'
import { ProductUncheckedUpdateWithoutFaqsInputObjectSchema } from './ProductUncheckedUpdateWithoutFaqsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductUpdateOneWithoutFaqsNestedInput> = z
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
    upsert: z.lazy(() => ProductUpsertWithoutFaqsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ProductUpdateWithoutFaqsInputObjectSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutFaqsInputObjectSchema)
      ])
      .optional()
  })
  .strict()

export const ProductUpdateOneWithoutFaqsNestedInputObjectSchema = Schema
