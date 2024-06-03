import { z } from 'zod'
import { MediaTypeSchema } from '../enums/MediaType.schema'
import { ProductCreateNestedOneWithoutMediasInputObjectSchema } from './ProductCreateNestedOneWithoutMediasInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaCreateWithoutRateInput> = z
  .object({
    id: z.string().optional(),
    fileName: z.string(),
    type: z.lazy(() => MediaTypeSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    Product: z
      .lazy(() => ProductCreateNestedOneWithoutMediasInputObjectSchema)
      .optional()
  })
  .strict()

export const MediaCreateWithoutRateInputObjectSchema = Schema
