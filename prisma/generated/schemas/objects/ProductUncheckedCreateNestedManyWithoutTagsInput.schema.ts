import { z } from 'zod'
import { ProductCreateWithoutTagsInputObjectSchema } from './ProductCreateWithoutTagsInput.schema'
import { ProductUncheckedCreateWithoutTagsInputObjectSchema } from './ProductUncheckedCreateWithoutTagsInput.schema'
import { ProductCreateOrConnectWithoutTagsInputObjectSchema } from './ProductCreateOrConnectWithoutTagsInput.schema'
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutTagsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutTagsInputObjectSchema),
          z.lazy(() => ProductCreateWithoutTagsInputObjectSchema).array(),
          z.lazy(() => ProductUncheckedCreateWithoutTagsInputObjectSchema),
          z
            .lazy(() => ProductUncheckedCreateWithoutTagsInputObjectSchema)
            .array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ProductCreateOrConnectWithoutTagsInputObjectSchema),
          z
            .lazy(() => ProductCreateOrConnectWithoutTagsInputObjectSchema)
            .array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductWhereUniqueInputObjectSchema),
          z.lazy(() => ProductWhereUniqueInputObjectSchema).array()
        ])
        .optional()
    })
    .strict()

export const ProductUncheckedCreateNestedManyWithoutTagsInputObjectSchema =
  Schema
