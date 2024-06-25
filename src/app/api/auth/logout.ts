import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const logoutHandler = () => {
  cookies().set({
    name: String(process.env.APP_AUTH_COOKIE_NAME),
    value: 'null',
    path: '/'
  })

  redirect('/')
}

export { logoutHandler as GET, logoutHandler as POST }
