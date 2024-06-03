import { useSession } from 'next-auth/react'

export const useAuth = () => {
  const session = useSession()

  return {
    session: session.data,
    status: session.status,
    user: session.data,
    authenticated: Boolean(session.status === 'authenticated')
  }
}
