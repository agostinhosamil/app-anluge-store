import { z } from 'zod'
import { TagCreateWithoutProductsInputObjectSchema } from './TagCreateWithoutProductsInput.schema'
import { TagUncheckedCreateWithoutProductsInputObjectSchema } from './TagUncheckedCreateWithoutProductsInput.schema'
import { TagCreateOrConnectWithoutProductsInputObjectSchema } from './TagCreateOrConnectWithoutProductsInput.schema'
import { TagUpsertWithWhereUniqueWithoutProductsInputObjectSchema } from './TagUpsertWithWhereUniqueWithoutProductsInput.schema'
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema'
import { TagUpdateWithWhereUniqueWithoutProductsInputObjectSchema } from './TagUpdateWithWhereUniqueWithoutProductsInput.schema'
import { TagUpdateManyWithWhereWithoutProductsInputObjectSchema } from './TagUpdateManyWithWhereWithoutProductsInput.schema'
import { TagScalarWhereInputObjectSchema } from './TagScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutProductsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TagCreateWithoutProductsInputObjectSchema),
          z.lazy(() => TagCreateWithoutProductsInputObjectSchema).array(),
          z.lazy(() => TagUncheckedCreateWithoutProductsInputObjectSchema),
          z
            .lazy(() => TagUncheckedCreateWithoutProductsInputObjectSchema)
            .array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TagCreateOrConnectWithoutProductsInputObjectSchema),
          z
            .lazy(() => TagCreateOrConnectWithoutProductsInputObjectSchema)
            .array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => TagUpsertWithWhereUniqueWithoutProductsInputObjectSchema
          ),
          z
            .lazy(
              () => TagUpsertWithWhereUniqueWithoutProductsInputObjectSchema
            )
            .array()
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => TagWhereUniqueInputObjectSchema),
          z.lazy(() => TagWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TagWhereUniqueInputObjectSchema),
          z.lazy(() => TagWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TagWhereUniqueInputObjectSchema),
          z.lazy(() => TagWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TagWhereUniqueInputObjectSchema),
          z.lazy(() => TagWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => TagUpdateWithWhereUniqueWithoutProductsInputObjectSchema
          ),
          z
            .lazy(
              () => TagUpdateWithWhereUniqueWithoutProductsInputObjectSchema
            )
            .array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => TagUpdateManyWithWhereWithoutProductsInputObjectSchema),
          z
            .lazy(() => TagUpdateManyWithWhereWithoutProductsInputObjectSchema)
            .array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TagScalarWhereInputObjectSchema),
          z.lazy(() => TagScalarWhereInputObjectSchema).array()
        ])
        .optional()
    })
    .strict()

export const TagUncheckedUpdateManyWithoutProductsNestedInputObjectSchema =
  Schema
