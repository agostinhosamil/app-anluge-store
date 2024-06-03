import Image from 'next/image'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'

import Link from 'next/link'
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa6'
import {
  UserCardContainer,
  UserCardImageContainer,
  UserCardPlaceholderFooter,
  UserCardPlaceholderFormFieldsContainer,
  UserCardPlaceholderSubmitButtonWrapper
} from './styles'

export const UserCardPlaceholder = () => {
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

      <UserCardPlaceholderFormFieldsContainer>
        <Row>
          <Col md={6}>
            <FloatingLabel
              controlId="floatingInput"
              label="Email ou telefone"
              className="mb11"
            >
              <Form.Control
                type="text"
                placeholder="Email ou telefone"
                autoComplete="off"
              />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel
              controlId="floatingInput"
              label="Palavra passe"
              className="mb11"
            >
              <Form.Control
                type="text"
                placeholder="Palavra passe"
                autoComplete="off"
              />
            </FloatingLabel>
          </Col>
        </Row>
      </UserCardPlaceholderFormFieldsContainer>

      <UserCardPlaceholderSubmitButtonWrapper>
        <button type="submit">Iniciar sessão</button>
      </UserCardPlaceholderSubmitButtonWrapper>

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
