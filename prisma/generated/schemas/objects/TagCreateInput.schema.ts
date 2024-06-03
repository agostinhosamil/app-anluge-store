import { z } from 'zod'
import { ProductCreateNestedManyWithoutTagsInputObjectSchema } from './ProductCreateNestedManyWithoutTagsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TagCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    slag: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    products: z
      .lazy(() => ProductCreateNestedManyWithoutTagsInputObjectSchema)
      .optional()
  })
  .strict()

export const TagCreateInputObjectSchema = Schema
