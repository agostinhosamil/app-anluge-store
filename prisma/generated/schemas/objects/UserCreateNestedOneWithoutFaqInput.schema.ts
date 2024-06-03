import { z } from 'zod'
import { UserCreateWithoutFaqInputObjectSchema } from './UserCreateWithoutFaqInput.schema'
import { UserUncheckedCreateWithoutFaqInputObjectSchema } from './UserUncheckedCreateWithoutFaqInput.schema'
import { UserCreateOrConnectWithoutFaqInputObjectSchema } from './UserCreateOrConnectWithoutFaqInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutFaqInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutFaqInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutFaqInputObjectSchema)
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutFaqInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
  })
  .strict()

export const UserCreateNestedOneWithoutFaqInputObjectSchema = Schema
