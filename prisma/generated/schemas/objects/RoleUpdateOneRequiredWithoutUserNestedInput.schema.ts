import { z } from 'zod'
import { RoleCreateWithoutUserInputObjectSchema } from './RoleCreateWithoutUserInput.schema'
import { RoleUncheckedCreateWithoutUserInputObjectSchema } from './RoleUncheckedCreateWithoutUserInput.schema'
import { RoleCreateOrConnectWithoutUserInputObjectSchema } from './RoleCreateOrConnectWithoutUserInput.schema'
import { RoleUpsertWithoutUserInputObjectSchema } from './RoleUpsertWithoutUserInput.schema'
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema'
import { RoleUpdateWithoutUserInputObjectSchema } from './RoleUpdateWithoutUserInput.schema'
import { RoleUncheckedUpdateWithoutUserInputObjectSchema } from './RoleUncheckedUpdateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoleUpdateOneRequiredWithoutUserNestedInput> = z
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
    upsert: z.lazy(() => RoleUpsertWithoutUserInputObjectSchema).optional(),
    connect: z.lazy(() => RoleWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => RoleUpdateWithoutUserInputObjectSchema),
        z.lazy(() => RoleUncheckedUpdateWithoutUserInputObjectSchema)
      ])
      .optional()
  })
  .strict()

export const RoleUpdateOneRequiredWithoutUserNestedInputObjectSchema = Schema
