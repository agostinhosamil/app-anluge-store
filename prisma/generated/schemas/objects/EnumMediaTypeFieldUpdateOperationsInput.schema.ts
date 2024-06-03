import { z } from 'zod'
import { MediaTypeSchema } from '../enums/MediaType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumMediaTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => MediaTypeSchema).optional()
  })
  .strict()

export const EnumMediaTypeFieldUpdateOperationsInputObjectSchema = Schema
