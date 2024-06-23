import { redirect } from 'next/navigation'

import { NotFoundPageContent } from '~/components/store/NotFoundPageContent'
import { prisma } from '~/services/prisma'
import { LayoutProps } from '~/Types/next'
import { auth } from '~/utils/auth'

import { Content } from './content'

type Params = {
  cartId: string
}

export default async function CartCheckoutPage({
  params
}: LayoutProps<Params>) {
  const userSignInData = await auth()

  if (!userSignInData) {
    return redirect(`/login`) // TODO: send a next parameter as the current page path
  }

  const { user: authenticatedUser } = userSignInData

  const cart = await prisma.cart.findUnique({
    where: {
      id: params.cartId,
      userId: authenticatedUser.id
    },

    include: {
      orders: {
        include: {
          product: {
            include: {
              medias: true
            }
          }
        }
      },
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
  })

  if (!cart) {
    return <NotFoundPageContent />
  }

  return <Content cart={cart} />
}
