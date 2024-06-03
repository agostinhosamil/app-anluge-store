import { z } from 'zod'
import { ProductTypeSchema } from '../enums/ProductType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductCreateManyCategoryInput> = z
  .object({
    id: z.string().optional(),
    code: z.string().optional().nullable(),
    name: z.string(),
    summary: z.string().optional().nullable(),
    description: z.string(),
    price: z.number(),
    slag: z.string(),
    stock: z.number().optional().nullable(),
    sku: z.string().optional().nullable(),
    barCode: z.string().optional().nullable(),
    type: z.lazy(() => ProductTypeSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
  })
  .strict()

export const ProductCreateManyCategoryInputObjectSchema = Schema
