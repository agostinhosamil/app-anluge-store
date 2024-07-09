'use client'

import { useAuthenticationContext } from '~/components/AuthenticationWrapper'
import { redirect } from '~/utils/navigation'

export const LoginButton = () => {
  const auth = useAuthenticationContext()

  const buttonClickHandler = async () => {
    const signInResponse = await auth.requestSignIn()

    if (signInResponse) {
      redirect(window.location.href)
    }
  }

  return (
    <button
      className="w-full px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-900 text-white text-center font-bold border-none outline-none"
      type="button"
      onClick={buttonClickHandler}
    >
      Iniciar sessão
    </button>
  )
}
