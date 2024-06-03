import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { MediaTypeSchema } from '../enums/MediaType.schema'
import { EnumMediaTypeFieldUpdateOperationsInputObjectSchema } from './EnumMediaTypeFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { RateUpdateOneWithoutMediasNestedInputObjectSchema } from './RateUpdateOneWithoutMediasNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaUpdateWithoutProductInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    fileName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    type: z
      .union([
        z.lazy(() => MediaTypeSchema),
        z.lazy(() => EnumMediaTypeFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    Rate: z
      .lazy(() => RateUpdateOneWithoutMediasNestedInputObjectSchema)
      .optional()
  })
  .strict()

export const MediaUpdateWithoutProductInputObjectSchema = Schema
