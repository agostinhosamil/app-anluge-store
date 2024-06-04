import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Col, FloatingLabel, Form, Row, Spinner } from 'react-bootstrap'
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa6'

import { handleSignInFormSubmit } from '~/utils/auth/client'
import {
  UserCardContainer,
  UserCardImageContainer,
  UserCardPlaceholderFooter,
  UserCardPlaceholderFormFieldsContainer,
  UserCardPlaceholderSubmitButtonWrapper
} from './styles'

export const UserCardPlaceholder = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const formSubmitHandler: React.FormEventHandler<
    HTMLFormElement
  > = async event => {
    event.preventDefault()

    setLoading(true)

    const formElement = event.target as HTMLFormElement
    const formData = new FormData(formElement)

    const signInResponse = await handleSignInFormSubmit(formData)

    if (signInResponse) {
      return window.location.reload()
    }

    alert('Usuário ou senha incorretos')
  }

  return (
    <UserCardContainer>
      <UserCardImageContainer $size="small">
        <div>
          <Image
            src="/assets/images/uploads/user-avatar.jpg"
            alt="User name"
            width={110}
            height={110}
          />
        </div>
      </UserCardImageContainer>

      <h3>Iniciar sessão</h3>

      <form method="post" action="/api/login" onSubmit={formSubmitHandler}>
        <UserCardPlaceholderFormFieldsContainer>
          <Row>
            <Col md={6}>
              <FloatingLabel
                controlId="username"
                label="Email ou telefone"
                className="mb11"
              >
                <Form.Control
                  type="text"
                  placeholder="Email ou telefone"
                  autoComplete="off"
                  name="user[username]"
                  disabled={loading}
                />
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <FloatingLabel
                controlId="user-password"
                label="Palavra passe"
                className="mb11"
              >
                <Form.Control
                  type="password"
                  placeholder="Palavra passe"
                  autoComplete="off"
                  name="user[password]"
                  disabled={loading}
                />
              </FloatingLabel>
            </Col>
          </Row>
        </UserCardPlaceholderFormFieldsContainer>

        <UserCardPlaceholderSubmitButtonWrapper>
          <button disabled={loading} type="submit">
            {loading && (
              <i>
                <Spinner size="sm" />
              </i>
            )}
            Iniciar sessão
          </button>
        </UserCardPlaceholderSubmitButtonWrapper>
      </form>

      <UserCardPlaceholderFooter>
        <div>
          <span>
            <Link href="/register">Criar conta</Link>, ou entrar pelo
          </span>
        </div>
        <ul>
          <li>
            <button className="google">
              <i>
                <FaGoogle />
              </i>
            </button>
          </li>
          <li>
            <button className="facebook">
              <i>
                <FaFacebook />
              </i>
            </button>
          </li>
          <li>
            <button className="twitter">
              <i>
                <FaTwitter />
              </i>
            </button>
          </li>
        </ul>
      </UserCardPlaceholderFooter>
    </UserCardContainer>
  )
}
