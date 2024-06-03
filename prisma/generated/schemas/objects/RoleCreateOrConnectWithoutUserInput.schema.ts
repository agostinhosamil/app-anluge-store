import { z } from 'zod'
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema'
import { RoleCreateWithoutUserInputObjectSchema } from './RoleCreateWithoutUserInput.schema'
import { RoleUncheckedCreateWithoutUserInputObjectSchema } from './RoleUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoleCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => RoleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RoleCreateWithoutUserInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutUserInputObjectSchema)
    ])
  })
  .strict()

export const RoleCreateOrConnectWithoutUserInputObjectSchema = Schema
