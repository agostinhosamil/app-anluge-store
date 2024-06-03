import { z } from 'zod'
import { ProductCreateWithoutTagsInputObjectSchema } from './ProductCreateWithoutTagsInput.schema'
import { ProductUncheckedCreateWithoutTagsInputObjectSchema } from './ProductUncheckedCreateWithoutTagsInput.schema'
import { ProductCreateOrConnectWithoutTagsInputObjectSchema } from './ProductCreateOrConnectWithoutTagsInput.schema'
import { ProductUpsertWithWhereUniqueWithoutTagsInputObjectSchema } from './ProductUpsertWithWhereUniqueWithoutTagsInput.schema'
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'
import { ProductUpdateWithWhereUniqueWithoutTagsInputObjectSchema } from './ProductUpdateWithWhereUniqueWithoutTagsInput.schema'
import { ProductUpdateManyWithWhereWithoutTagsInputObjectSchema } from './ProductUpdateManyWithWhereWithoutTagsInput.schema'
import { ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductUpdateManyWithoutTagsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutTagsInputObjectSchema),
        z.lazy(() => ProductCreateWithoutTagsInputObjectSchema).array(),
        z.lazy(() => ProductUncheckedCreateWithoutTagsInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutTagsInputObjectSchema).array()
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ProductCreateOrConnectWithoutTagsInputObjectSchema),
        z.lazy(() => ProductCreateOrConnectWithoutTagsInputObjectSchema).array()
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ProductUpsertWithWhereUniqueWithoutTagsInputObjectSchema),
        z
          .lazy(() => ProductUpsertWithWhereUniqueWithoutTagsInputObjectSchema)
          .array()
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ProductUpdateWithWhereUniqueWithoutTagsInputObjectSchema),
        z
          .lazy(() => ProductUpdateWithWhereUniqueWithoutTagsInputObjectSchema)
          .array()
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ProductUpdateManyWithWhereWithoutTagsInputObjectSchema),
        z
          .lazy(() => ProductUpdateManyWithWhereWithoutTagsInputObjectSchema)
          .array()
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ProductScalarWhereInputObjectSchema),
        z.lazy(() => ProductScalarWhereInputObjectSchema).array()
      ])
      .optional()
  })
  .strict()

export const ProductUpdateManyWithoutTagsNestedInputObjectSchema = Schema
