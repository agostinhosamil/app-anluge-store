import { z } from 'zod'
import { PermissionScalarWhereInputObjectSchema } from './PermissionScalarWhereInput.schema'
import { PermissionUpdateManyMutationInputObjectSchema } from './PermissionUpdateManyMutationInput.schema'
import { PermissionUncheckedUpdateManyWithoutPermissionsInputObjectSchema } from './PermissionUncheckedUpdateManyWithoutPermissionsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PermissionUpdateManyWithWhereWithoutRolesInput> =
  z
    .object({
      where: z.lazy(() => PermissionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PermissionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => PermissionUncheckedUpdateManyWithoutPermissionsInputObjectSchema
        )
      ])
    })
    .strict()

export const PermissionUpdateManyWithWhereWithoutRolesInputObjectSchema = Schema
