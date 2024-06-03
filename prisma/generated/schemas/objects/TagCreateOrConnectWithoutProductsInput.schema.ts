import { z } from 'zod'
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema'
import { TagCreateWithoutProductsInputObjectSchema } from './TagCreateWithoutProductsInput.schema'
import { TagUncheckedCreateWithoutProductsInputObjectSchema } from './TagUncheckedCreateWithoutProductsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TagCreateOrConnectWithoutProductsInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagCreateWithoutProductsInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutProductsInputObjectSchema)
    ])
  })
  .strict()

export const TagCreateOrConnectWithoutProductsInputObjectSchema = Schema
