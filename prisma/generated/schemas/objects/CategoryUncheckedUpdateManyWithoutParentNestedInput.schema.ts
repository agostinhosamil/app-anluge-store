import { z } from 'zod'
import { CategoryCreateWithoutParentInputObjectSchema } from './CategoryCreateWithoutParentInput.schema'
import { CategoryUncheckedCreateWithoutParentInputObjectSchema } from './CategoryUncheckedCreateWithoutParentInput.schema'
import { CategoryCreateOrConnectWithoutParentInputObjectSchema } from './CategoryCreateOrConnectWithoutParentInput.schema'
import { CategoryUpsertWithWhereUniqueWithoutParentInputObjectSchema } from './CategoryUpsertWithWhereUniqueWithoutParentInput.schema'
import { CategoryCreateManyParentInputEnvelopeObjectSchema } from './CategoryCreateManyParentInputEnvelope.schema'
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema'
import { CategoryUpdateWithWhereUniqueWithoutParentInputObjectSchema } from './CategoryUpdateWithWhereUniqueWithoutParentInput.schema'
import { CategoryUpdateManyWithWhereWithoutParentInputObjectSchema } from './CategoryUpdateManyWithWhereWithoutParentInput.schema'
import { CategoryScalarWhereInputObjectSchema } from './CategoryScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CategoryUncheckedUpdateManyWithoutParentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CategoryCreateWithoutParentInputObjectSchema),
          z.lazy(() => CategoryCreateWithoutParentInputObjectSchema).array(),
          z.lazy(() => CategoryUncheckedCreateWithoutParentInputObjectSchema),
          z
            .lazy(() => CategoryUncheckedCreateWithoutParentInputObjectSchema)
            .array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CategoryCreateOrConnectWithoutParentInputObjectSchema),
          z
            .lazy(() => CategoryCreateOrConnectWithoutParentInputObjectSchema)
            .array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => CategoryUpsertWithWhereUniqueWithoutParentInputObjectSchema
          ),
          z
            .lazy(
              () => CategoryUpsertWithWhereUniqueWithoutParentInputObjectSchema
            )
            .array()
        ])
        .optional(),
      createMany: z
        .lazy(() => CategoryCreateManyParentInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => CategoryWhereUniqueInputObjectSchema),
          z.lazy(() => CategoryWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => CategoryWhereUniqueInputObjectSchema),
          z.lazy(() => CategoryWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => CategoryWhereUniqueInputObjectSchema),
          z.lazy(() => CategoryWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => CategoryWhereUniqueInputObjectSchema),
          z.lazy(() => CategoryWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => CategoryUpdateWithWhereUniqueWithoutParentInputObjectSchema
          ),
          z
            .lazy(
              () => CategoryUpdateWithWhereUniqueWithoutParentInputObjectSchema
            )
            .array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => CategoryUpdateManyWithWhereWithoutParentInputObjectSchema
          ),
          z
            .lazy(
              () => CategoryUpdateManyWithWhereWithoutParentInputObjectSchema
            )
            .array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => CategoryScalarWhereInputObjectSchema),
          z.lazy(() => CategoryScalarWhereInputObjectSchema).array()
        ])
        .optional()
    })
    .strict()

export const CategoryUncheckedUpdateManyWithoutParentNestedInputObjectSchema =
  Schema
