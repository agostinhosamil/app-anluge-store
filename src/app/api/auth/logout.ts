import { redirect } from 'next/navigation'

import { signOut } from '~/utils/auth'

const logoutHandler = async () => {
  await signOut()

  redirect('/')
}

export { logoutHandler as GET, logoutHandler as POST }
