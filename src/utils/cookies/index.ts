import { cookies } from 'next/headers'

export const getCookie = (
  cookieName: string,
  defaultValue?: string
): string => {
  const cookie = cookies().get(String(cookieName))

  if (cookie) {
    return cookie.value
  }

  return defaultValue || ''
}
