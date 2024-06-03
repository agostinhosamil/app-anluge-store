import { z } from 'zod'
import { RoleUpdateWithoutUserInputObjectSchema } from './RoleUpdateWithoutUserInput.schema'
import { RoleUncheckedUpdateWithoutUserInputObjectSchema } from './RoleUncheckedUpdateWithoutUserInput.schema'
import { RoleCreateWithoutUserInputObjectSchema } from './RoleCreateWithoutUserInput.schema'
import { RoleUncheckedCreateWithoutUserInputObjectSchema } from './RoleUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoleUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => RoleUpdateWithoutUserInputObjectSchema),
      z.lazy(() => RoleUncheckedUpdateWithoutUserInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => RoleCreateWithoutUserInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutUserInputObjectSchema)
    ])
  })
  .strict()

export const RoleUpsertWithoutUserInputObjectSchema = Schema
