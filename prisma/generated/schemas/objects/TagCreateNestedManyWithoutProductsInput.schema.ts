import { z } from 'zod'
import { TagCreateWithoutProductsInputObjectSchema } from './TagCreateWithoutProductsInput.schema'
import { TagUncheckedCreateWithoutProductsInputObjectSchema } from './TagUncheckedCreateWithoutProductsInput.schema'
import { TagCreateOrConnectWithoutProductsInputObjectSchema } from './TagCreateOrConnectWithoutProductsInput.schema'
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TagCreateNestedManyWithoutProductsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TagCreateWithoutProductsInputObjectSchema),
        z.lazy(() => TagCreateWithoutProductsInputObjectSchema).array(),
        z.lazy(() => TagUncheckedCreateWithoutProductsInputObjectSchema),
        z.lazy(() => TagUncheckedCreateWithoutProductsInputObjectSchema).array()
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TagCreateOrConnectWithoutProductsInputObjectSchema),
        z.lazy(() => TagCreateOrConnectWithoutProductsInputObjectSchema).array()
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => TagWhereUniqueInputObjectSchema),
        z.lazy(() => TagWhereUniqueInputObjectSchema).array()
      ])
      .optional()
  })
  .strict()

export const TagCreateNestedManyWithoutProductsInputObjectSchema = Schema
