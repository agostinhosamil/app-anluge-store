import { z } from 'zod'
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'
import { ProductCreateWithoutTagsInputObjectSchema } from './ProductCreateWithoutTagsInput.schema'
import { ProductUncheckedCreateWithoutTagsInputObjectSchema } from './ProductUncheckedCreateWithoutTagsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutTagsInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutTagsInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutTagsInputObjectSchema)
    ])
  })
  .strict()

export const ProductCreateOrConnectWithoutTagsInputObjectSchema = Schema
