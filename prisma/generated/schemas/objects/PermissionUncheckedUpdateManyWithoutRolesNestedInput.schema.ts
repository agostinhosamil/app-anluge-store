import { z } from 'zod'
import { PermissionCreateWithoutRolesInputObjectSchema } from './PermissionCreateWithoutRolesInput.schema'
import { PermissionUncheckedCreateWithoutRolesInputObjectSchema } from './PermissionUncheckedCreateWithoutRolesInput.schema'
import { PermissionCreateOrConnectWithoutRolesInputObjectSchema } from './PermissionCreateOrConnectWithoutRolesInput.schema'
import { PermissionUpsertWithWhereUniqueWithoutRolesInputObjectSchema } from './PermissionUpsertWithWhereUniqueWithoutRolesInput.schema'
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema'
import { PermissionUpdateWithWhereUniqueWithoutRolesInputObjectSchema } from './PermissionUpdateWithWhereUniqueWithoutRolesInput.schema'
import { PermissionUpdateManyWithWhereWithoutRolesInputObjectSchema } from './PermissionUpdateManyWithWhereWithoutRolesInput.schema'
import { PermissionScalarWhereInputObjectSchema } from './PermissionScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PermissionUncheckedUpdateManyWithoutRolesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PermissionCreateWithoutRolesInputObjectSchema),
          z.lazy(() => PermissionCreateWithoutRolesInputObjectSchema).array(),
          z.lazy(() => PermissionUncheckedCreateWithoutRolesInputObjectSchema),
          z
            .lazy(() => PermissionUncheckedCreateWithoutRolesInputObjectSchema)
            .array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PermissionCreateOrConnectWithoutRolesInputObjectSchema),
          z
            .lazy(() => PermissionCreateOrConnectWithoutRolesInputObjectSchema)
            .array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => PermissionUpsertWithWhereUniqueWithoutRolesInputObjectSchema
          ),
          z
            .lazy(
              () => PermissionUpsertWithWhereUniqueWithoutRolesInputObjectSchema
            )
            .array()
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => PermissionWhereUniqueInputObjectSchema),
          z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PermissionWhereUniqueInputObjectSchema),
          z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PermissionWhereUniqueInputObjectSchema),
          z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PermissionWhereUniqueInputObjectSchema),
          z.lazy(() => PermissionWhereUniqueInputObjectSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => PermissionUpdateWithWhereUniqueWithoutRolesInputObjectSchema
          ),
          z
            .lazy(
              () => PermissionUpdateWithWhereUniqueWithoutRolesInputObjectSchema
            )
            .array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => PermissionUpdateManyWithWhereWithoutRolesInputObjectSchema
          ),
          z
            .lazy(
              () => PermissionUpdateManyWithWhereWithoutRolesInputObjectSchema
            )
            .array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PermissionScalarWhereInputObjectSchema),
          z.lazy(() => PermissionScalarWhereInputObjectSchema).array()
        ])
        .optional()
    })
    .strict()

export const PermissionUncheckedUpdateManyWithoutRolesNestedInputObjectSchema =
  Schema
