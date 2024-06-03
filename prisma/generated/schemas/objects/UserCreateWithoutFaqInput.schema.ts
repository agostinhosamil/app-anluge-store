import { z } from 'zod'
import { UserTokenCreateNestedManyWithoutUserInputObjectSchema } from './UserTokenCreateNestedManyWithoutUserInput.schema'
import { RoleCreateNestedOneWithoutUserInputObjectSchema } from './RoleCreateNestedOneWithoutUserInput.schema'
import { RateCreateNestedManyWithoutUserInputObjectSchema } from './RateCreateNestedManyWithoutUserInput.schema'
import { FavoriteCreateNestedManyWithoutUserInputObjectSchema } from './FavoriteCreateNestedManyWithoutUserInput.schema'
import { CartCreateNestedOneWithoutUserInputObjectSchema } from './CartCreateNestedOneWithoutUserInput.schema'
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema'
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateWithoutFaqInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    phone: z.string(),
    username: z.string().optional().nullable(),
    emailVerified: z.coerce.date().optional().nullable(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    Token: z
      .lazy(() => UserTokenCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    role: z.lazy(() => RoleCreateNestedOneWithoutUserInputObjectSchema),
    rates: z
      .lazy(() => RateCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    favorites: z
      .lazy(() => FavoriteCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    cart: z
      .lazy(() => CartCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional()
  })
  .strict()

export const UserCreateWithoutFaqInputObjectSchema = Schema
