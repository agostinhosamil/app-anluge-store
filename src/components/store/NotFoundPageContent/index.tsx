'use client'

import { Container } from '@components/styled'

import { Body, Content, ImageWrapper, Subtitle, Title } from './styles'
import NotFoundImage from './svg/not-found.svg'

export const NotFoundPageContent = () => {
  return (
    <Container>
      <Body>
        <ImageWrapper>
          <NotFoundImage />
        </ImageWrapper>
        <Content>
          <Title>Página não encontrada</Title>
          <Subtitle>
            A página buscas não foi encontrada ou talvez não tenhas acesso a
            ela.
          </Subtitle>
        </Content>
      </Body>
    </Container>
  )
}
