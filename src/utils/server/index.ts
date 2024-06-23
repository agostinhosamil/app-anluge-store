import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { auth } from '@utils/auth'
import { noEmpty } from '~/utils'

export const getCurrentPageUrlObject = (): URL | null => {
  const currentPageUrl = headers().get('x-current-page-url')

  if (noEmpty(currentPageUrl)) {
    try {
      return new URL(currentPageUrl)
    } catch (err) {}
  }

  return null
}

export const getCurrentPageUrl = () => {
  return getCurrentPageUrlObject()?.toString() || ''
}

export const getCurrentPagePath = () => {
  return getCurrentPageUrlObject()?.pathname || ''
}

export const redirectToLogin = () => {
  redirect(`/login?next=${encodeURIComponent(getCurrentPagePath())}`)
}

export const redirectToLoginIfUnAuthenticated = async () => {
  const userSignInData = await auth()

  if (!userSignInData) {
    redirectToLogin()
  }
}
