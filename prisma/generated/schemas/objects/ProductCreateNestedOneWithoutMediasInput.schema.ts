import { z } from 'zod'
import { ProductCreateWithoutMediasInputObjectSchema } from './ProductCreateWithoutMediasInput.schema'
import { ProductUncheckedCreateWithoutMediasInputObjectSchema } from './ProductUncheckedCreateWithoutMediasInput.schema'
import { ProductCreateOrConnectWithoutMediasInputObjectSchema } from './ProductCreateOrConnectWithoutMediasInput.schema'
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutMediasInput> = z
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
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
  })
  .strict()

export const ProductCreateNestedOneWithoutMediasInputObjectSchema = Schema
