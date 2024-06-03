import { z } from 'zod'
import { RoleCreateWithoutPermissionsInputObjectSchema } from './RoleCreateWithoutPermissionsInput.schema'
import { RoleUncheckedCreateWithoutPermissionsInputObjectSchema } from './RoleUncheckedCreateWithoutPermissionsInput.schema'
import { RoleCreateOrConnectWithoutPermissionsInputObjectSchema } from './RoleCreateOrConnectWithoutPermissionsInput.schema'
import { RoleUpsertWithWhereUniqueWithoutPermissionsInputObjectSchema } from './RoleUpsertWithWhereUniqueWithoutPermissionsInput.schema'
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema'
import { RoleUpdateWithWhereUniqueWithoutPermissionsInputObjectSchema } from './RoleUpdateWithWhereUniqueWithoutPermissionsInput.schema'
import { RoleUpdateManyWithWhereWithoutPermissionsInputObjectSchema } from './RoleUpdateManyWithWhereWithoutPermissionsInput.schema'
import { RoleScalarWhereInputObjectSchema } from './RoleScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoleUncheckedUpdateManyWithoutPermissionsNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => RoleUpsertWithWhereUniqueWithoutPermissionsInputObjectSchema
          ),
          z
            .lazy(
              () => RoleUpsertWithWhereUniqueWithoutPermissionsInputObjectSchema
            )
            .array()
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => RoleWhereUniqueInputObjectSchema),
          z.lazy(() => RoleWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => RoleWhereUniqueInputObjectSchema),
          z.lazy(() => RoleWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => RoleWhereUniqueInputObjectSchema),
          z.lazy(() => RoleWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => RoleWhereUniqueInputObjectSchema),
          z.lazy(() => RoleWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => RoleUpdateWithWhereUniqueWithoutPermissionsInputObjectSchema
          ),
          z
            .lazy(
              () => RoleUpdateWithWhereUniqueWithoutPermissionsInputObjectSchema
            )
            .array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => RoleUpdateManyWithWhereWithoutPermissionsInputObjectSchema
          ),
          z
            .lazy(
              () => RoleUpdateManyWithWhereWithoutPermissionsInputObjectSchema
            )
            .array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => RoleScalarWhereInputObjectSchema),
          z.lazy(() => RoleScalarWhereInputObjectSchema).array()
        ])
        .optional()
    })
    .strict()

export const RoleUncheckedUpdateManyWithoutPermissionsNestedInputObjectSchema =
  Schema
