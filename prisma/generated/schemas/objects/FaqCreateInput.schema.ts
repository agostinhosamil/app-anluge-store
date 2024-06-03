import { z } from 'zod'
import { UserCreateNestedOneWithoutFaqInputObjectSchema } from './UserCreateNestedOneWithoutFaqInput.schema'
import { ProductCreateNestedOneWithoutFaqsInputObjectSchema } from './ProductCreateNestedOneWithoutFaqsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FaqCreateInput> = z
  .object({
    id: z.string().optional(),
    question: z.string(),
    answer: z.string().optional(),
    published: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutFaqInputObjectSchema),
    Product: z
      .lazy(() => ProductCreateNestedOneWithoutFaqsInputObjectSchema)
      .optional()
  })
  .strict()

export const FaqCreateInputObjectSchema = Schema
