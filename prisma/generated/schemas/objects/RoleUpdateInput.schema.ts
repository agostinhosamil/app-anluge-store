import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { PermissionUpdateManyWithoutRolesNestedInputObjectSchema } from './PermissionUpdateManyWithoutRolesNestedInput.schema'
import { UserUpdateManyWithoutRoleNestedInputObjectSchema } from './UserUpdateManyWithoutRoleNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoleUpdateInput> = z
  .object({
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
      .lazy(() => PermissionUpdateManyWithoutRolesNestedInputObjectSchema)
      .optional(),
    User: z
      .lazy(() => UserUpdateManyWithoutRoleNestedInputObjectSchema)
      .optional()
  })
  .strict()

export const RoleUpdateInputObjectSchema = Schema
