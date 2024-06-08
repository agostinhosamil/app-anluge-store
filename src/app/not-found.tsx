'use client'

import { Footer } from 'store@components/Footer'
import { Header } from 'store@components/Header'
import { NotFoundPageContent } from 'store@components/NotFoundPageContent'
import { Container } from 'store@components/styles'

export default function NotFoundPage() {
  return (
    <Container>
      <Header />
      <NotFoundPageContent />
      <Footer />
    </Container>
  )
}
