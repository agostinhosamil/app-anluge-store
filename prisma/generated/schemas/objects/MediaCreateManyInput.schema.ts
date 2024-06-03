import { z } from 'zod'
import { MediaTypeSchema } from '../enums/MediaType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaCreateManyInput> = z
  .object({
    id: z.string().optional(),
    fileName: z.string(),
    type: z.lazy(() => MediaTypeSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    productId: z.string().optional().nullable(),
    rateId: z.string().optional().nullable()
  })
  .strict()

export const MediaCreateManyInputObjectSchema = Schema
