import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { UserTokenUpdateManyWithoutUserNestedInputObjectSchema } from './UserTokenUpdateManyWithoutUserNestedInput.schema'
import { RoleUpdateOneRequiredWithoutUserNestedInputObjectSchema } from './RoleUpdateOneRequiredWithoutUserNestedInput.schema'
import { RateUpdateManyWithoutUserNestedInputObjectSchema } from './RateUpdateManyWithoutUserNestedInput.schema'
import { FavoriteUpdateManyWithoutUserNestedInputObjectSchema } from './FavoriteUpdateManyWithoutUserNestedInput.schema'
import { CartUpdateOneWithoutUserNestedInputObjectSchema } from './CartUpdateOneWithoutUserNestedInput.schema'
import { FaqUpdateManyWithoutUserNestedInputObjectSchema } from './FaqUpdateManyWithoutUserNestedInput.schema'
import { AccountUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUpdateManyWithoutUserNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> = z
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
      .lazy(() => UserTokenUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    role: z
      .lazy(() => RoleUpdateOneRequiredWithoutUserNestedInputObjectSchema)
      .optional(),
    rates: z
      .lazy(() => RateUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    favorites: z
      .lazy(() => FavoriteUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    cart: z
      .lazy(() => CartUpdateOneWithoutUserNestedInputObjectSchema)
      .optional(),
    Faq: z
      .lazy(() => FaqUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema)
      .optional()
  })
  .strict()

export const UserUpdateWithoutSessionsInputObjectSchema = Schema
