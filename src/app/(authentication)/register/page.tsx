'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useFormStatus } from 'react-dom'

import { signIn } from '@utils/auth/client'
import {
  Container,
  SubmitWrapper,
  Title
} from 'authentication@styles/auth-pages'
import { createUserByFormData } from '~/utils/models/user'

export default function RegisterPage() {
  const { pending } = useFormStatus()

  const router = useRouter()

  const formSubmitHandler: React.FormEventHandler = event => {
    event.preventDefault()

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

          router.replace('/')
        }
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
              />
            </FloatingLabel>
          </Col>
        </Row>

        <SubmitWrapper>
          <Button disabled={pending} type="submit">
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
