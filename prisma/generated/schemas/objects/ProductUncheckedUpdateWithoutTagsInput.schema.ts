import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema'
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema'
import { ProductTypeSchema } from '../enums/ProductType.schema'
import { EnumProductTypeFieldUpdateOperationsInputObjectSchema } from './EnumProductTypeFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { MediaUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './MediaUncheckedUpdateManyWithoutProductNestedInput.schema'
import { FaqUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './FaqUncheckedUpdateManyWithoutProductNestedInput.schema'
import { FavoriteUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './FavoriteUncheckedUpdateManyWithoutProductNestedInput.schema'
import { OrderUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './OrderUncheckedUpdateManyWithoutProductNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutTagsInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    code: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional()
      .nullable(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    summary: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional()
      .nullable(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    price: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    slag: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    stock: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)
      ])
      .optional()
      .nullable(),
    sku: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional()
      .nullable(),
    barCode: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional()
      .nullable(),
    type: z
      .union([
        z.lazy(() => ProductTypeSchema),
        z.lazy(() => EnumProductTypeFieldUpdateOperationsInputObjectSchema)
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
    categoryId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional()
      .nullable(),
    medias: z
      .lazy(() => MediaUncheckedUpdateManyWithoutProductNestedInputObjectSchema)
      .optional(),
    faqs: z
      .lazy(() => FaqUncheckedUpdateManyWithoutProductNestedInputObjectSchema)
      .optional(),
    favorites: z
      .lazy(
        () => FavoriteUncheckedUpdateManyWithoutProductNestedInputObjectSchema
      )
      .optional(),
    Order: z
      .lazy(() => OrderUncheckedUpdateManyWithoutProductNestedInputObjectSchema)
      .optional()
  })
  .strict()

export const ProductUncheckedUpdateWithoutTagsInputObjectSchema = Schema
