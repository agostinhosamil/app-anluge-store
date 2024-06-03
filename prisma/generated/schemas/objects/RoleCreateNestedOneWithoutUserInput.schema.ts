import { z } from 'zod'
import { RoleCreateWithoutUserInputObjectSchema } from './RoleCreateWithoutUserInput.schema'
import { RoleUncheckedCreateWithoutUserInputObjectSchema } from './RoleUncheckedCreateWithoutUserInput.schema'
import { RoleCreateOrConnectWithoutUserInputObjectSchema } from './RoleCreateOrConnectWithoutUserInput.schema'
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoleCreateNestedOneWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RoleCreateWithoutUserInputObjectSchema),
        z.lazy(() => RoleUncheckedCreateWithoutUserInputObjectSchema)
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => RoleCreateOrConnectWithoutUserInputObjectSchema)
      .optional(),
    connect: z.lazy(() => RoleWhereUniqueInputObjectSchema).optional()
  })
  .strict()

export const RoleCreateNestedOneWithoutUserInputObjectSchema = Schema
