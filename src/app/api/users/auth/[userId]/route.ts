import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { generateUserAuthenticationToken } from '@utils/auth'
import { NextApiProps } from '~/Types/next'
import { prisma } from '~/services/prisma'
import { userIncludeFactory } from '~/utils/user'

type Params = {
  userId: string
}

export const POST = async (
  _request: NextRequest,
  props: NextApiProps<Params>
) => {
  const userId = props.params.userId

  const user = await prisma.user.findUnique({
    where: {
      id: userId
    },

    include: userIncludeFactory()
  })

  if (user) {
    const token = generateUserAuthenticationToken(user)

    cookies().set({
      name: String(process.env.APP_AUTH_COOKIE_NAME),
      value: token,
      path: '/'
    })

    return NextResponse.json(
      {
        user,
        token
      },
      {
        headers: {
          'app-jwt': token
        }
      }
    )
  }

  return NextResponse.json(
    {
      error: true,
      message: 'could not login',
      user: null,
      token: null
    },
    {
      status: 401
    }
  )
}
