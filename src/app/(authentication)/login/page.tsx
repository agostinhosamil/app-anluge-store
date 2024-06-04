'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button, FloatingLabel, Form, Spinner } from 'react-bootstrap'

import {
  Container,
  SubmitWrapper,
  Title
} from 'authentication@styles/auth-pages'
import { handleSignInFormSubmit } from '~/utils/auth/client'

export default function LoginPage() {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  // const router = useRouter()

  // const authContext = useAuthenticationContext()

  const formSubmitHandler: React.FormEventHandler = async event => {
    event.preventDefault()

    setLoading(true)

    if (event.target instanceof HTMLFormElement) {
      const formElement = event.target
      const formData = new FormData(formElement)

      // const userInputUserNamer = formData.get('user[username]')
      // const userInputPassword = formData.get('user[password]')

      try {
        const signInResponse = await handleSignInFormSubmit(formData)

        // await signIn({
        //   password: String(userInputPassword),
        //   username: String(userInputUserNamer)
        // })

        // const signInResponse = await signIn('credentials', {
        //   redirect: false,
        //   callbackUrl: '/',
        //   username: userInputEmail,
        //   password: userInputPassword
        // })

        // if (!signInResponse) {
        //   return alert('Ba!!!!')
        // }

        if (signInResponse) {
          return window.location.reload()
        }
      } catch (err) {}

      setLoading(false)
      setError('Email ou palavra passe estão incorretos')
    }
  }

  return (
    <Container>
      <Title>Iniciar sessão</Title>

      {error && <div>{error}</div>}

      <form
        method="post"
        action="/api/users/auth"
        onSubmit={(...args) => formSubmitHandler(...args)}
      >
        <FloatingLabel
          controlId="floatingInput"
          label="Endereço de email ou telefone"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Endereço de email ou telefone"
            autoComplete="off"
            name="user[username]"
            disabled={loading}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Palavra passe">
          <Form.Control
            type="password"
            placeholder="Password"
            autoComplete="off"
            name="user[password]"
            disabled={loading}
          />
        </FloatingLabel>

        <SubmitWrapper>
          <Button type="submit" disabled={loading}>
            {loading && (
              <i>
                <Spinner size="sm" />
              </i>
            )}
            Criar conta
          </Button>
        </SubmitWrapper>

        <ul>
          <li>
            <Link href="/register">Criar conta nova</Link>
          </li>
          <li>
            <Link href="/auth/forgot-password">
              Esqueci a minha palavra passe
            </Link>
          </li>
        </ul>
      </form>
    </Container>
  )
}
