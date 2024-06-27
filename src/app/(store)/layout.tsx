'use client'

import { LayoutProps } from 'Types/next'

import { Footer } from 'store@components/Footer'
import { Header } from 'store@components/Header'
import { Container } from 'store@components/styles'
import { AssistantFloatingButton } from '~/components/store/AssistantFloatingButton'

export default function StorePagesLayout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      {children}
      <AssistantFloatingButton />
      <Footer />
    </Container>
  )
}
