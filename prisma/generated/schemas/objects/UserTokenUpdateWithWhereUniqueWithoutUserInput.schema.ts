import { z } from 'zod'
import { UserTokenWhereUniqueInputObjectSchema } from './UserTokenWhereUniqueInput.schema'
import { UserTokenUpdateWithoutUserInputObjectSchema } from './UserTokenUpdateWithoutUserInput.schema'
import { UserTokenUncheckedUpdateWithoutUserInputObjectSchema } from './UserTokenUncheckedUpdateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserTokenUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => UserTokenWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserTokenUpdateWithoutUserInputObjectSchema),
        z.lazy(() => UserTokenUncheckedUpdateWithoutUserInputObjectSchema)
      ])
    })
    .strict()

export const UserTokenUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema
