import { cookies } from 'next/headers'

export const getAuthTokenCookie = () => {
  const authTokenCookie = cookies().get(
    String(process.env.APP_AUTH_COOKIE_NAME)
  )

  if (authTokenCookie) {
    return authTokenCookie.value
  }

  return 'null'
}
