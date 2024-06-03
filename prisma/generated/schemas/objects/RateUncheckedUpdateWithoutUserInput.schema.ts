import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { MediaUncheckedUpdateManyWithoutRateNestedInputObjectSchema } from './MediaUncheckedUpdateManyWithoutRateNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RateUncheckedUpdateWithoutUserInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    message: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    value: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)
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
    medias: z
      .lazy(() => MediaUncheckedUpdateManyWithoutRateNestedInputObjectSchema)
      .optional()
  })
  .strict()

export const RateUncheckedUpdateWithoutUserInputObjectSchema = Schema
