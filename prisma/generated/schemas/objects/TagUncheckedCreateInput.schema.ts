import { z } from 'zod'
import { ProductUncheckedCreateNestedManyWithoutTagsInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutTagsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TagUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    slag: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    products: z
      .lazy(() => ProductUncheckedCreateNestedManyWithoutTagsInputObjectSchema)
      .optional()
  })
  .strict()

export const TagUncheckedCreateInputObjectSchema = Schema
