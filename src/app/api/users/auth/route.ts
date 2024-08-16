import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { signIn } from '@utils/auth'

export const POST = async (request: NextRequest) => {
  const requestBody = await request.json()

  const signInResponse = await signIn({
    password: requestBody.password,
    username: requestBody.username
  })

  if (signInResponse) {
    const currentDate = new Date()
    currentDate.setDate(currentDate.getDate() + 5)
    const maxAge = currentDate.getTime()

    cookies().set({
      name: String(process.env.APP_AUTH_COOKIE_NAME),
      value: signInResponse.token,
      path: '/',
      maxAge,
      expires: maxAge,
      httpOnly: true,
      secure: true,
      sameSite: true
    })

    return NextResponse.json(signInResponse, {
      headers: {
        'app-jwt': signInResponse.token
      }
    })
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
