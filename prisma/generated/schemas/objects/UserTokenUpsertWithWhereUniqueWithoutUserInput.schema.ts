import { z } from 'zod'
import { UserTokenWhereUniqueInputObjectSchema } from './UserTokenWhereUniqueInput.schema'
import { UserTokenUpdateWithoutUserInputObjectSchema } from './UserTokenUpdateWithoutUserInput.schema'
import { UserTokenUncheckedUpdateWithoutUserInputObjectSchema } from './UserTokenUncheckedUpdateWithoutUserInput.schema'
import { UserTokenCreateWithoutUserInputObjectSchema } from './UserTokenCreateWithoutUserInput.schema'
import { UserTokenUncheckedCreateWithoutUserInputObjectSchema } from './UserTokenUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserTokenUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => UserTokenWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserTokenUpdateWithoutUserInputObjectSchema),
        z.lazy(() => UserTokenUncheckedUpdateWithoutUserInputObjectSchema)
      ]),
      create: z.union([
        z.lazy(() => UserTokenCreateWithoutUserInputObjectSchema),
        z.lazy(() => UserTokenUncheckedCreateWithoutUserInputObjectSchema)
      ])
    })
    .strict()

export const UserTokenUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema
