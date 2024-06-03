import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { UserTokenUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './UserTokenUncheckedUpdateManyWithoutUserNestedInput.schema'
import { RateUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './RateUncheckedUpdateManyWithoutUserNestedInput.schema'
import { CartUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './CartUncheckedUpdateOneWithoutUserNestedInput.schema'
import { FaqUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './FaqUncheckedUpdateManyWithoutUserNestedInput.schema'
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInput.schema'
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutFavoritesInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    password: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    phone: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    username: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional()
      .nullable(),
    emailVerified: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)
      ])
      .optional()
      .nullable(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)
      ])
      .optional()
      .nullable(),
    roleId: z
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
    Token: z
      .lazy(
        () => UserTokenUncheckedUpdateManyWithoutUserNestedInputObjectSchema
      )
      .optional(),
    rates: z
      .lazy(() => RateUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    cart: z
      .lazy(() => CartUncheckedUpdateOneWithoutUserNestedInputObjectSchema)
      .optional(),
    Faq: z
      .lazy(() => FaqUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional()
  })
  .strict()

export const UserUncheckedUpdateWithoutFavoritesInputObjectSchema = Schema
