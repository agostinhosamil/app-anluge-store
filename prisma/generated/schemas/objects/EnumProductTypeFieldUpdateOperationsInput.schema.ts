import { z } from 'zod'
import { ProductTypeSchema } from '../enums/ProductType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumProductTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => ProductTypeSchema).optional()
  })
  .strict()

export const EnumProductTypeFieldUpdateOperationsInputObjectSchema = Schema
