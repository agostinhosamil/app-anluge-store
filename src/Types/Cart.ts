import { Prisma } from '@prisma/client'

export type CartProps = Prisma.CartGetPayload<{
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
}>

export interface CartInclude extends Prisma.CategoryDefaultArgs {
  orders: {
    include: {
      product: {
        include: {
          medias: true
          category: true
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
