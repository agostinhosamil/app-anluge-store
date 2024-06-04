'use client'

import { LayoutProps } from 'Types/next'

import { Footer } from 'store@components/Footer'
import { Header } from 'store@components/Header'
import { Container } from 'store@components/styles'

export default function NotFoundPage({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      <div>Page Not Found!!!</div>
      <Footer />
    </Container>
  )
}
