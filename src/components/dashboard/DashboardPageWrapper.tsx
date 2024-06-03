'use client'

import { User } from '@prisma/client'
import { FunctionComponent, PropsWithChildren } from 'react'
// import { EdgeStoreProvider } from '~/lib/edgestore'

import { AdSlider } from './AdSlider'
import { Aside } from './Aside'
import { Header } from './Header'
import { AsideWrapper, Body, Container, Content, Main } from './styles'

const EdgeStoreProvider: React.FC<React.PropsWithChildren> = props => {
  return props.children
}

type DashboardPageWrapperProps = {
  user?: User
}

type DashboardPageWrapperComponent = FunctionComponent<
  PropsWithChildren & DashboardPageWrapperProps
>

export const DashboardPageWrapper: DashboardPageWrapperComponent = props => {
  return (
    <EdgeStoreProvider>
      <Container>
        <Header />
        <Body>
          <AsideWrapper>
            <Aside />
          </AsideWrapper>
          <Content>
            <AdSlider />
            <Main>{props.children}</Main>
          </Content>
        </Body>
      </Container>
    </EdgeStoreProvider>
  )
}
