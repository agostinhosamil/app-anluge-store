import { z } from 'zod'
import { ProductCreateWithoutOrderInputObjectSchema } from './ProductCreateWithoutOrderInput.schema'
import { ProductUncheckedCreateWithoutOrderInputObjectSchema } from './ProductUncheckedCreateWithoutOrderInput.schema'
import { ProductCreateOrConnectWithoutOrderInputObjectSchema } from './ProductCreateOrConnectWithoutOrderInput.schema'
import { ProductUpsertWithoutOrderInputObjectSchema } from './ProductUpsertWithoutOrderInput.schema'
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'
import { ProductUpdateWithoutOrderInputObjectSchema } from './ProductUpdateWithoutOrderInput.schema'
import { ProductUncheckedUpdateWithoutOrderInputObjectSchema } from './ProductUncheckedUpdateWithoutOrderInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutOrderNestedInput> =
  z
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
      upsert: z
        .lazy(() => ProductUpsertWithoutOrderInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProductUpdateWithoutOrderInputObjectSchema),
          z.lazy(() => ProductUncheckedUpdateWithoutOrderInputObjectSchema)
        ])
        .optional()
    })
    .strict()

export const ProductUpdateOneRequiredWithoutOrderNestedInputObjectSchema =
  Schema
