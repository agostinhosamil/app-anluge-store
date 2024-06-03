import { redirect } from 'next/navigation'
import { Fragment } from 'react'

import { LayoutProps } from '~/Types/next'
import { auth } from '~/utils/auth'
import { getAuthTokenCookie } from '~/utils/authTokenCookie'
import { userIs } from '~/utils/models/user'

export default async function DashboardSystemLayout(props: LayoutProps) {
  const authenticatedUser = await auth({
    token: getAuthTokenCookie()
  })

  if (!(authenticatedUser && userIs(authenticatedUser.user, 'admin:master'))) {
    return redirect('/dashboard')
  }

  return <Fragment>{props.children}</Fragment>
}
