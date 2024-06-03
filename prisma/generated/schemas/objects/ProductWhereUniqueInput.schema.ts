import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    code: z.string().optional(),
    slag: z.string().optional(),
    sku: z.string().optional(),
    barCode: z.string().optional()
  })
  .strict()

export const ProductWhereUniqueInputObjectSchema = Schema
