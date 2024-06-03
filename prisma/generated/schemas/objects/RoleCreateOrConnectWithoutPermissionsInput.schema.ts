import { z } from 'zod'
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema'
import { RoleCreateWithoutPermissionsInputObjectSchema } from './RoleCreateWithoutPermissionsInput.schema'
import { RoleUncheckedCreateWithoutPermissionsInputObjectSchema } from './RoleUncheckedCreateWithoutPermissionsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoleCreateOrConnectWithoutPermissionsInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RoleCreateWithoutPermissionsInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputObjectSchema)
    ])
  })
  .strict()

export const RoleCreateOrConnectWithoutPermissionsInputObjectSchema = Schema
