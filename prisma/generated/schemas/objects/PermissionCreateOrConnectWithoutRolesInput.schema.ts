import { z } from 'zod'
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema'
import { PermissionCreateWithoutRolesInputObjectSchema } from './PermissionCreateWithoutRolesInput.schema'
import { PermissionUncheckedCreateWithoutRolesInputObjectSchema } from './PermissionUncheckedCreateWithoutRolesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PermissionCreateOrConnectWithoutRolesInput> = z
  .object({
    where: z.lazy(() => PermissionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PermissionCreateWithoutRolesInputObjectSchema),
      z.lazy(() => PermissionUncheckedCreateWithoutRolesInputObjectSchema)
    ])
  })
  .strict()

export const PermissionCreateOrConnectWithoutRolesInputObjectSchema = Schema
