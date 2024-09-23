import { auth } from '~/utils/auth'
import { redirectToLogin } from '~/utils/server'

import { Content } from './content'

export default async function OrdersPage() {
  const userSignInData = await auth()

  if (!userSignInData) {
    return redirectToLogin()
  }

  const { user } = userSignInData

  return <Content user={user} />
}
