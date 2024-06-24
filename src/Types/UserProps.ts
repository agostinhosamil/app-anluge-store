import { Prisma } from '@prisma/client'

export type UserProps = Prisma.UserGetPayload<{
  include: {
    carts: {
      include: {
        orders: {
          include: {
            product: {
              include: {
                medias: true
              }
            }
          }
        }
        user: {
          include: {
            role: {
              include: {
                permissions: true
              }
            }
          }
        }
      }
    }
    role: {
      include: {
        permissions: true
      }
    }
  }
}>
