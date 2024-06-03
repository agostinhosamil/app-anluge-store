'use client'

import { redirect } from 'next/navigation'

import { useAuthenticationContext } from '@components/AuthenticationWrapper'
import { Header } from '@components/Header'
import {
  Container,
  Content,
  ContentBody
} from 'authentication@styles/authenticationLayout'
import { LayoutProps } from 'Types/next'

export default function AuthenticationLayout({ children }: LayoutProps) {
  const { auth } = useAuthenticationContext()

  if (auth && auth.user) {
    return redirect('/')
  }

  return (
    <Container>
      <Header />
      <Content>
        <ContentBody>{children}</ContentBody>
      </Content>
    </Container>
  )
}
