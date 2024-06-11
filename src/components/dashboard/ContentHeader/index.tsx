'use client'

import {
  ActionsList,
  ActionsListWrapper,
  Container,
  TitleWrapper
} from './styles'

type ContentHeaderProps = {
  title?: string
}

type ContentHeaderComponent = React.FunctionComponent<
  React.PropsWithChildren & ContentHeaderProps
>

export * from './ActionButton'

export const ContentHeader: ContentHeaderComponent = props => {
  return (
    <Container>
      {props.title && (
        <TitleWrapper>
          <h1>{props.title}</h1>
        </TitleWrapper>
      )}
      {props.children && (
        <ActionsListWrapper>
          <ActionsList>{props.children}</ActionsList>
        </ActionsListWrapper>
      )}
    </Container>
  )
}
