import React, { Fragment } from 'react'

import { noEmpty } from '~/utils'

import { Container, Footer, SubTitle, Title, TitleWrapper } from './styles'

type FormGroupProps = {
  title?: string
  subtitle?: string
  footer?: string
}

type FormGroupComponent = React.FunctionComponent<
  React.PropsWithChildren & FormGroupProps
>

export const FormGroup: FormGroupComponent = ({ title, ...props }) => {
  const titled = noEmpty(title)

  return (
    <Container>
      {titled && (
        <TitleWrapper>
          <Title>{title}</Title>
          {noEmpty(props.subtitle) && <SubTitle>{props.subtitle}</SubTitle>}
        </TitleWrapper>
      )}
      <Fragment>{props.children}</Fragment>
      {noEmpty(props.footer) && (
        <Footer>
          <span>{props.footer}</span>
        </Footer>
      )}
    </Container>
  )
}
