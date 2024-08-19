export const sanitizeCookieName = (cookieName: string): string => {
  const cookieNamePrefix = '__APP-anluge-'
  const cookieNamePrefixRe = new RegExp(`^(${cookieNamePrefix})`)

  return cookieNamePrefix.concat(cookieName.replace(cookieNamePrefixRe, ''))
}
