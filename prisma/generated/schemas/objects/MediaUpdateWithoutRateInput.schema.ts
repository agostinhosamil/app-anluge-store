import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { MediaTypeSchema } from '../enums/MediaType.schema'
import { EnumMediaTypeFieldUpdateOperationsInputObjectSchema } from './EnumMediaTypeFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { ProductUpdateOneWithoutMediasNestedInputObjectSchema } from './ProductUpdateOneWithoutMediasNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MediaUpdateWithoutRateInput> = z
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
    Product: z
      .lazy(() => ProductUpdateOneWithoutMediasNestedInputObjectSchema)
      .optional()
  })
  .strict()

export const MediaUpdateWithoutRateInputObjectSchema = Schema
