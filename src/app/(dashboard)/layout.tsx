// 'use client'
import { redirect } from 'next/navigation'

import { auth } from '@utils/auth'
import { getCookie } from '@utils/cookies'
import { DashboardPageWrapper } from 'dashboard@components/DashboardPageWrapper'
import { LayoutProps } from 'Types/next'

export default async function DashboardLayout(props: LayoutProps) {
  const authTokenCookie = getCookie(String(process.env.APP_AUTH_COOKIE_NAME))

  const authenticatedUser = await auth({
    token: authTokenCookie
  })

  if (!authenticatedUser) {
    return redirect('/login?next=dashboard')
  }

  return (
    <DashboardPageWrapper user={authenticatedUser.user}>
      {props.children}
    </DashboardPageWrapper>
  )
}
