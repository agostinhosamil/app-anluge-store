import { z } from 'zod'
import { CategoryCreateWithoutParentInputObjectSchema } from './CategoryCreateWithoutParentInput.schema'
import { CategoryUncheckedCreateWithoutParentInputObjectSchema } from './CategoryUncheckedCreateWithoutParentInput.schema'
import { CategoryCreateOrConnectWithoutParentInputObjectSchema } from './CategoryCreateOrConnectWithoutParentInput.schema'
import { CategoryCreateManyParentInputEnvelopeObjectSchema } from './CategoryCreateManyParentInputEnvelope.schema'
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CategoryCreateNestedManyWithoutParentInput> = z
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
    createMany: z
      .lazy(() => CategoryCreateManyParentInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => CategoryWhereUniqueInputObjectSchema),
        z.lazy(() => CategoryWhereUniqueInputObjectSchema).array()
      ])
      .optional()
  })
  .strict()

export const CategoryCreateNestedManyWithoutParentInputObjectSchema = Schema
