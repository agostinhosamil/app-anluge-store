import { z } from 'zod'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { PermissionUncheckedUpdateManyWithoutRolesNestedInputObjectSchema } from './PermissionUncheckedUpdateManyWithoutRolesNestedInput.schema'
import { UserUncheckedUpdateManyWithoutRoleNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutRoleNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoleUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    key: z
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
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)
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
    permissions: z
      .lazy(
        () => PermissionUncheckedUpdateManyWithoutRolesNestedInputObjectSchema
      )
      .optional(),
    User: z
      .lazy(() => UserUncheckedUpdateManyWithoutRoleNestedInputObjectSchema)
      .optional()
  })
  .strict()

export const RoleUncheckedUpdateInputObjectSchema = Schema
