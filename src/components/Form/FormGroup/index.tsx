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
    <Container className="bg-zinc-50 border-zinc-300 dark:bg-zinc-800 dark:border-zinc-600">
      {titled && (
        <TitleWrapper>
          <Title className="text-zinc-900 dark:text-zinc-50">{title}</Title>
          {noEmpty(props.subtitle) && (
            <SubTitle className="text-zinc-600 dark:text-zinc-300">
              {props.subtitle}
            </SubTitle>
          )}
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
