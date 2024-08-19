import { sanitizeCookieName } from './utils'

export type CookieDate =
  | Date
  | number
  | `${number}h`
  | `${number}m`
  | `${number}s`
  | `${number}d`
  | `${number}M`
  | `${number}y`

export type CookieOptions = {
  'Max-Age'?: CookieDate
  Path?: string
  Secure?: string
}

const readCookieDate = (cookieDate: CookieDate): number => {
  if (typeof cookieDate === 'number') {
    return cookieDate
  }

  if (cookieDate instanceof Date) {
    return cookieDate.getTime()
  }

  const cookieMaxAgeValueRe = /^([0-9]+([hmsdMy]))$/

  const cookieMaxAgeValueReMatch = cookieMaxAgeValueRe.exec(cookieDate)

  const currentDate = new Date(Date.now())

  if (cookieMaxAgeValueReMatch) {
    const cookieMaxAgeValue = parseInt(cookieDate)
    const [cookieMaxAgeValueUnity] = cookieMaxAgeValueReMatch.slice(2)

    switch (cookieMaxAgeValueUnity) {
      case 'h':
        currentDate.setHours(currentDate.getHours() + cookieMaxAgeValue)
        break
      case 'm':
        currentDate.setMinutes(currentDate.getMinutes() + cookieMaxAgeValue)
        break
      case 's':
        currentDate.setSeconds(currentDate.getSeconds() + cookieMaxAgeValue)
        break
      case 'd':
        currentDate.setDate(currentDate.getDate() + cookieMaxAgeValue)
        break
      case 'M':
        currentDate.setMonth(currentDate.getMonth() + cookieMaxAgeValue)
        break
      case 'y':
        currentDate.setFullYear(currentDate.getFullYear() + cookieMaxAgeValue)
        break
    }
  }

  return currentDate.getTime()
}

type SetCookieUtil = (
  cookieName: string,
  cookieValue: any,
  options?: CookieOptions
) => void

export const setCookie: SetCookieUtil = (
  cookieName,
  cookieValue,
  options = {}
) => {
  // 'HOME_PAGE=HeyMan;Max-Age=1718480293524;SameSite=Lax;Path=/home'
  if (options['Max-Age']) {
    options['Max-Age'] = readCookieDate(options['Max-Age'])
  }

  cookieName = sanitizeCookieName(cookieName)

  const cookieOptions: Array<string> = []
  const value =
    typeof cookieValue === 'object' && cookieValue
      ? JSON.stringify(cookieValue)
      : String(cookieValue)

  for (const key in options) {
    cookieOptions.push(`${key}=${options[key as keyof typeof options]}`)
  }

  const cookieData = `${cookieName}=${encodeURIComponent(value)};${cookieOptions.join(';')}`

  // console.log({ cookieData })

  document.cookie = cookieData
}

export const getCookie = (cookieName: string) => {
  const name = sanitizeCookieName(cookieName) + '='
  const decodedCookieData = decodeURIComponent(global.document?.cookie || '')
  const ca = decodedCookieData.split(';')

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]

    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }

  return ''
}

export const cookie = {
  setCookie
}
