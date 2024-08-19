import { cookies } from 'next/headers'
import { sanitizeCookieName } from './utils'

export const getCookie = (
  cookieName: string,
  defaultValue?: string
): string => {
  cookieName = sanitizeCookieName(cookieName)

  const cookie = cookies().get(String(cookieName))

  if (cookie) {
    return cookie.value
  }

  return defaultValue || ''
}
