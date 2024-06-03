import { z } from 'zod'
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema'
import { RoleUpdateWithoutPermissionsInputObjectSchema } from './RoleUpdateWithoutPermissionsInput.schema'
import { RoleUncheckedUpdateWithoutPermissionsInputObjectSchema } from './RoleUncheckedUpdateWithoutPermissionsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoleUpdateWithWhereUniqueWithoutPermissionsInput> =
  z
    .object({
      where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RoleUpdateWithoutPermissionsInputObjectSchema),
        z.lazy(() => RoleUncheckedUpdateWithoutPermissionsInputObjectSchema)
      ])
    })
    .strict()

export const RoleUpdateWithWhereUniqueWithoutPermissionsInputObjectSchema =
  Schema
