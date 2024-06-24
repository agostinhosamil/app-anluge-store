import { NotFoundPageContent } from '~/components/store/NotFoundPageContent'
import { prisma } from '~/services/prisma'
import { LayoutProps } from '~/Types/next'
import { auth } from '~/utils/auth'
import { redirectToLoginIfUnAuthenticated } from '~/utils/server'
import { Content } from './content'

type Params = {
  cartId: string
}

export default async function CancelCartPage(props: LayoutProps<Params>) {
  await redirectToLoginIfUnAuthenticated()

  const userSignInData = await auth()

  const { params } = props

  const cart = await prisma.cart.findUnique({
    where: {
      id: params.cartId,
      userId: String(userSignInData?.user.id)
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

  return !cart ? <NotFoundPageContent /> : <Content cart={cart} />
}
