import { z } from 'zod'
import { MediaTypeSchema } from '../enums/MediaType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaUncheckedCreateWithoutRateInput> = z
  .object({
    id: z.string().optional(),
    fileName: z.string(),
    type: z.lazy(() => MediaTypeSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    productId: z.string().optional().nullable()
  })
  .strict()

export const MediaUncheckedCreateWithoutRateInputObjectSchema = Schema
