import { NextApiHandler } from 'Types/next'

import { prisma } from '@services/prisma'
import { NextResponse } from 'next/server'
import { auth } from '~/utils/auth'
import { redirectToLoginIfUnAuthenticated } from '~/utils/server'

type Params = {
  cartId: string
}

export const POST: NextApiHandler<Params> = async (request, props) => {
  await redirectToLoginIfUnAuthenticated()

  const userSignInData = await auth()

  const { params } = props

  try {
    await prisma.cart.delete({
      where: {
        id: params.cartId,
        userId: String(userSignInData?.user.id)
      }
    })
  } catch (err) {
    // pass
    return NextResponse.json({
      success: false,
      error: true,
      message: 'Could not delete order'
    })
  }

  return NextResponse.json({
    success: true,
    error: false,
    message: 'Could not delete order'
  })
}

export { POST as DELETE }
