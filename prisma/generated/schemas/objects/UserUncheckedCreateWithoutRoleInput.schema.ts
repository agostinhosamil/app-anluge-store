import { z } from 'zod'
import { UserTokenUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './UserTokenUncheckedCreateNestedManyWithoutUserInput.schema'
import { RateUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './RateUncheckedCreateNestedManyWithoutUserInput.schema'
import { FavoriteUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './FavoriteUncheckedCreateNestedManyWithoutUserInput.schema'
import { CartUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './CartUncheckedCreateNestedOneWithoutUserInput.schema'
import { FaqUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './FaqUncheckedCreateNestedManyWithoutUserInput.schema'
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema'
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutRoleInput> = z
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
      .lazy(
        () => UserTokenUncheckedCreateNestedManyWithoutUserInputObjectSchema
      )
      .optional(),
    rates: z
      .lazy(() => RateUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    favorites: z
      .lazy(() => FavoriteUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    cart: z
      .lazy(() => CartUncheckedCreateNestedOneWithoutUserInputObjectSchema)
      .optional(),
    Faq: z
      .lazy(() => FaqUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional()
  })
  .strict()

export const UserUncheckedCreateWithoutRoleInputObjectSchema = Schema
