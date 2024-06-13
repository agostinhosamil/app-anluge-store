'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button, Col, FloatingLabel, Form, Row, Spinner } from 'react-bootstrap'

import { signIn } from '@utils/auth/client'
import {
  Container,
  SubmitWrapper,
  Title
} from 'authentication@styles/auth-pages'
import { createUserByFormData } from '~/utils/models/user'
import { Paragraph, StyledLink } from './styles'

export default function RegisterPage() {
  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter()

  const formSubmitHandler: React.FormEventHandler = event => {
    event.preventDefault()

    setLoading(true)

    if (event.target instanceof HTMLFormElement) {
      const formElement = event.target
      const formData = new FormData(formElement)

      createUserByFormData(formData).then(async user => {
        const userInputEmail = formData.get('user[email]')
        const userInputPassword = formData.get('user[password]')

        if (user) {
          const signInResponse = await signIn({
            username: String(userInputEmail),
            password: String(userInputPassword)
          })

          if (!signInResponse) {
            return alert('Ba!!!!')
          }

          window.location.reload()
        }

        setLoading(false)
      })
    }
  }

  return (
    <Container>
      <Title>Criar Conta</Title>

      <form
        method="post"
        action="/api/users/store"
        onSubmit={formSubmitHandler}
      >
        <FloatingLabel
          controlId="username"
          label="Nome completo"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Nome completo"
            name="user[name]"
            autoComplete="off"
            disabled={loading}
          />
        </FloatingLabel>

        <Row>
          <Col md={7}>
            <FloatingLabel
              controlId="user-email-address"
              label="Endereço de email"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Endereço de email"
                autoComplete="off"
                name="user[email]"
                disabled={loading}
              />
            </FloatingLabel>
          </Col>
          <Col md={5}>
            <FloatingLabel
              controlId="user-phone-number"
              label="Número de telefone"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Número de telefone"
                autoComplete="off"
                name="user[phone]"
                disabled={loading}
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <FloatingLabel
              controlId="user-password"
              label="Palavra passe"
              className="mb-3"
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
          <Col md={6}>
            <FloatingLabel
              controlId="user-password-confirmation"
              label="Reescreva a palavra passe"
              className="mb-3"
            >
              <Form.Control
                type="password"
                placeholder="Reescreva a palavra passe"
                autoComplete="off"
                name="user[passwordConfirmation]"
                disabled={loading}
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Paragraph>
              Ao criar a sua conta, estas ciente de que leste e concordas com os
              nossos{' '}
              <StyledLink href="/about/terms" target="_blank">
                termos de serviços
              </StyledLink>
              , a nossa{' '}
              <StyledLink href="/about/privacy" target="_blank">
                política de privacidade e uso de dados
              </StyledLink>{' '}
              bem como a nossa{' '}
              <StyledLink href="/about/cookies" target="_blank">
                política de uso de cookies
              </StyledLink>
              .
            </Paragraph>
          </Col>
        </Row>

        <SubmitWrapper>
          <Button disabled={loading} type="submit">
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
            <Link href="/login">Iniciar sessão</Link>
          </li>
        </ul>
      </form>
    </Container>
  )
}
