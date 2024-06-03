import { z } from 'zod'
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'
import { ProductCreateWithoutMediasInputObjectSchema } from './ProductCreateWithoutMediasInput.schema'
import { ProductUncheckedCreateWithoutMediasInputObjectSchema } from './ProductUncheckedCreateWithoutMediasInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutMediasInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutMediasInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutMediasInputObjectSchema)
    ])
  })
  .strict()

export const ProductCreateOrConnectWithoutMediasInputObjectSchema = Schema
