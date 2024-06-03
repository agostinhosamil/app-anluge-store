import { z } from 'zod'
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema'
import { RoleUpdateWithoutPermissionsInputObjectSchema } from './RoleUpdateWithoutPermissionsInput.schema'
import { RoleUncheckedUpdateWithoutPermissionsInputObjectSchema } from './RoleUncheckedUpdateWithoutPermissionsInput.schema'
import { RoleCreateWithoutPermissionsInputObjectSchema } from './RoleCreateWithoutPermissionsInput.schema'
import { RoleUncheckedCreateWithoutPermissionsInputObjectSchema } from './RoleUncheckedCreateWithoutPermissionsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoleUpsertWithWhereUniqueWithoutPermissionsInput> =
  z
    .object({
      where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RoleUpdateWithoutPermissionsInputObjectSchema),
        z.lazy(() => RoleUncheckedUpdateWithoutPermissionsInputObjectSchema)
      ]),
      create: z.union([
        z.lazy(() => RoleCreateWithoutPermissionsInputObjectSchema),
        z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputObjectSchema)
      ])
    })
    .strict()

export const RoleUpsertWithWhereUniqueWithoutPermissionsInputObjectSchema =
  Schema
