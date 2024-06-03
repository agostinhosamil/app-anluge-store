import { z } from 'zod'
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema'
import { PermissionUpdateWithoutRolesInputObjectSchema } from './PermissionUpdateWithoutRolesInput.schema'
import { PermissionUncheckedUpdateWithoutRolesInputObjectSchema } from './PermissionUncheckedUpdateWithoutRolesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PermissionUpdateWithWhereUniqueWithoutRolesInput> =
  z
    .object({
      where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PermissionUpdateWithoutRolesInputObjectSchema),
        z.lazy(() => PermissionUncheckedUpdateWithoutRolesInputObjectSchema)
      ])
    })
    .strict()

export const PermissionUpdateWithWhereUniqueWithoutRolesInputObjectSchema =
  Schema
