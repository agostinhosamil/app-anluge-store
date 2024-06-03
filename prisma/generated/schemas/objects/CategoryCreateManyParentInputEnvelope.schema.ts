import { z } from 'zod'
import { CategoryCreateManyParentInputObjectSchema } from './CategoryCreateManyParentInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CategoryCreateManyParentInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => CategoryCreateManyParentInputObjectSchema),
      z.lazy(() => CategoryCreateManyParentInputObjectSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict()

export const CategoryCreateManyParentInputEnvelopeObjectSchema = Schema
