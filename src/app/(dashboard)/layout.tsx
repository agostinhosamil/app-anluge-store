// 'use client'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { DashboardPageWrapper } from 'dashboard@components/DashboardPageWrapper'
import { LayoutProps } from 'Types/next'
import { auth } from '~/utils/auth'

export default async function DashboardLayout(props: LayoutProps) {
  const authTokenCookie = cookies().get(
    String(process.env.APP_AUTH_COOKIE_NAME)
  )

  const authenticatedUser = await auth({
    token: (authTokenCookie && authTokenCookie.value) || ''
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
