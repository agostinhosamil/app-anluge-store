import { cookies } from 'next/headers'

import { auth } from '@utils/auth'
import { NextResponse } from 'next/server'

export const GET = async () => {
  const authTokenCookie = cookies().get(
    String(process.env.APP_AUTH_COOKIE_NAME)
  )

  if (authTokenCookie) {
    const authenticatedUser = await auth({
      token: authTokenCookie.value
    })

    if (authenticatedUser) {
      return NextResponse.json({
        status: 'authenticated',
        message: 'user logged in',
        ...authenticatedUser
      })
    }
  }

  return NextResponse.json({
    status: 'not authenticated',
    message: 'must login to continue',
    user: null
  })
}
