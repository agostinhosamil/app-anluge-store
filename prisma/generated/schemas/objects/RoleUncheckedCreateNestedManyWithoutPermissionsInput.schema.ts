import { z } from 'zod'
import { RoleCreateWithoutPermissionsInputObjectSchema } from './RoleCreateWithoutPermissionsInput.schema'
import { RoleUncheckedCreateWithoutPermissionsInputObjectSchema } from './RoleUncheckedCreateWithoutPermissionsInput.schema'
import { RoleCreateOrConnectWithoutPermissionsInputObjectSchema } from './RoleCreateOrConnectWithoutPermissionsInput.schema'
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoleUncheckedCreateNestedManyWithoutPermissionsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RoleCreateWithoutPermissionsInputObjectSchema),
          z.lazy(() => RoleCreateWithoutPermissionsInputObjectSchema).array(),
          z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputObjectSchema),
          z
            .lazy(() => RoleUncheckedCreateWithoutPermissionsInputObjectSchema)
            .array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => RoleCreateOrConnectWithoutPermissionsInputObjectSchema),
          z
            .lazy(() => RoleCreateOrConnectWithoutPermissionsInputObjectSchema)
            .array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => RoleWhereUniqueInputObjectSchema),
          z.lazy(() => RoleWhereUniqueInputObjectSchema).array()
        ])
        .optional()
    })
    .strict()

export const RoleUncheckedCreateNestedManyWithoutPermissionsInputObjectSchema =
  Schema
