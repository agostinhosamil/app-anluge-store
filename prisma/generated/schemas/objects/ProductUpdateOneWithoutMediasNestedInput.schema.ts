import { z } from 'zod'
import { ProductCreateWithoutMediasInputObjectSchema } from './ProductCreateWithoutMediasInput.schema'
import { ProductUncheckedCreateWithoutMediasInputObjectSchema } from './ProductUncheckedCreateWithoutMediasInput.schema'
import { ProductCreateOrConnectWithoutMediasInputObjectSchema } from './ProductCreateOrConnectWithoutMediasInput.schema'
import { ProductUpsertWithoutMediasInputObjectSchema } from './ProductUpsertWithoutMediasInput.schema'
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'
import { ProductUpdateWithoutMediasInputObjectSchema } from './ProductUpdateWithoutMediasInput.schema'
import { ProductUncheckedUpdateWithoutMediasInputObjectSchema } from './ProductUncheckedUpdateWithoutMediasInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductUpdateOneWithoutMediasNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutMediasInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutMediasInputObjectSchema)
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProductCreateOrConnectWithoutMediasInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => ProductUpsertWithoutMediasInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ProductUpdateWithoutMediasInputObjectSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutMediasInputObjectSchema)
      ])
      .optional()
  })
  .strict()

export const ProductUpdateOneWithoutMediasNestedInputObjectSchema = Schema
