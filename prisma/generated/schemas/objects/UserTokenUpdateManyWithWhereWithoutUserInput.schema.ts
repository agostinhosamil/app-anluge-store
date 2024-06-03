import { z } from 'zod'
import { UserTokenScalarWhereInputObjectSchema } from './UserTokenScalarWhereInput.schema'
import { UserTokenUpdateManyMutationInputObjectSchema } from './UserTokenUpdateManyMutationInput.schema'
import { UserTokenUncheckedUpdateManyWithoutTokenInputObjectSchema } from './UserTokenUncheckedUpdateManyWithoutTokenInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserTokenUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => UserTokenScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => UserTokenUpdateManyMutationInputObjectSchema),
      z.lazy(() => UserTokenUncheckedUpdateManyWithoutTokenInputObjectSchema)
    ])
  })
  .strict()

export const UserTokenUpdateManyWithWhereWithoutUserInputObjectSchema = Schema
