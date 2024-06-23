import { redirect } from 'next/navigation'

import { auth } from '~/utils/auth'
import { getCurrentPagePath } from '~/utils/server'

export default async function FavoritesCart() {
  const userSignInData = await auth()

  if (!userSignInData) {
    return redirect(`/login?next=${encodeURIComponent(getCurrentPagePath())}`)
  }

  return (
    <div>
      <h1>Favorites here</h1>
    </div>
  )
}
