import { z } from 'zod'
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema'
import { PermissionUpdateWithoutRolesInputObjectSchema } from './PermissionUpdateWithoutRolesInput.schema'
import { PermissionUncheckedUpdateWithoutRolesInputObjectSchema } from './PermissionUncheckedUpdateWithoutRolesInput.schema'
import { PermissionCreateWithoutRolesInputObjectSchema } from './PermissionCreateWithoutRolesInput.schema'
import { PermissionUncheckedCreateWithoutRolesInputObjectSchema } from './PermissionUncheckedCreateWithoutRolesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PermissionUpsertWithWhereUniqueWithoutRolesInput> =
  z
    .object({
      where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PermissionUpdateWithoutRolesInputObjectSchema),
        z.lazy(() => PermissionUncheckedUpdateWithoutRolesInputObjectSchema)
      ]),
      create: z.union([
        z.lazy(() => PermissionCreateWithoutRolesInputObjectSchema),
        z.lazy(() => PermissionUncheckedCreateWithoutRolesInputObjectSchema)
      ])
    })
    .strict()

export const PermissionUpsertWithWhereUniqueWithoutRolesInputObjectSchema =
  Schema
