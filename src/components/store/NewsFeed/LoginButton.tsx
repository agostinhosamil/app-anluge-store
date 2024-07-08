'use client'

import { useAuthenticationContext } from '~/components/AuthenticationWrapper'

export const LoginButton = () => {
  const auth = useAuthenticationContext()

  const buttonClickHandler = () => {
    auth.requestSignIn()
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
