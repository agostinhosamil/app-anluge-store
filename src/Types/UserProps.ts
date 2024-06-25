import { Prisma } from '@prisma/client'
import { CartInclude } from './Cart'

export type UserProps = Prisma.UserGetPayload<{
  include: {
    carts: {
      include: CartInclude
    }
    role: {
      include: {
        permissions: true
      }
    }
  }
}>
