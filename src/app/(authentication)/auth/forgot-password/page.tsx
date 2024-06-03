"use client";

import Link from "next/link";
import { Button, FloatingLabel, Form } from "react-bootstrap";

import {
  Container,
  SubmitWrapper,
  Title,
} from "authentication@styles/auth-pages";

export default function LoginPage() {
  return (
    <Container>
      <Title>Esqueci a minha senha</Title>
      <p>
        Vamos ajudá-lo a redefinir a sua senha, começando por localizar a sua
        conta. Insira o seu email abaixo para localizarmos a sua conta
      </p>
      <form method="post" action="/">
        <FloatingLabel
          controlId="floatingInput"
          label="Endereço de email"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            autoComplete="off"
          />
        </FloatingLabel>

        <SubmitWrapper>
          <Button>Encontrar minha conta</Button>
        </SubmitWrapper>

        <ul>
          <li>
            <Link href="/register">Iniciar sessão</Link>
          </li>
          <li>
            <Link href="/register">Criar conta nova</Link>
          </li>
        </ul>
      </form>
    </Container>
  );
}
