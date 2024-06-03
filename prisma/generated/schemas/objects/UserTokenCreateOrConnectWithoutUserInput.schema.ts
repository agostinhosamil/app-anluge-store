import { z } from 'zod'
import { UserTokenWhereUniqueInputObjectSchema } from './UserTokenWhereUniqueInput.schema'
import { UserTokenCreateWithoutUserInputObjectSchema } from './UserTokenCreateWithoutUserInput.schema'
import { UserTokenUncheckedCreateWithoutUserInputObjectSchema } from './UserTokenUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserTokenCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => UserTokenWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserTokenCreateWithoutUserInputObjectSchema),
      z.lazy(() => UserTokenUncheckedCreateWithoutUserInputObjectSchema)
    ])
  })
  .strict()

export const UserTokenCreateOrConnectWithoutUserInputObjectSchema = Schema
