import { z } from 'zod'
import { MediaTypeSchema } from '../enums/MediaType.schema'
import { RateCreateNestedOneWithoutMediasInputObjectSchema } from './RateCreateNestedOneWithoutMediasInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaCreateWithoutProductInput> = z
  .object({
    id: z.string().optional(),
    fileName: z.string(),
    type: z.lazy(() => MediaTypeSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    Rate: z
      .lazy(() => RateCreateNestedOneWithoutMediasInputObjectSchema)
      .optional()
  })
  .strict()

export const MediaCreateWithoutProductInputObjectSchema = Schema
