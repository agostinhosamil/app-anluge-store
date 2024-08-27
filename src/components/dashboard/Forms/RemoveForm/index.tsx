import { Body, Container } from './styles'

import { FormSubmit } from 'dashboard@components/FormSubmit'

type RemoveFormProps = {
  actionLabel?: string
}

type RemoveFormComponent = React.FunctionComponent<
  React.PropsWithChildren &
    React.FormHTMLAttributes<HTMLFormElement> &
    RemoveFormProps
>

export const RemoveForm: RemoveFormComponent = ({ actionLabel, ...props }) => {
  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()

    if (typeof props.onSubmit === 'function') {
      props.onSubmit(event)
    }
  }

  return (
    <Container
      method="post"
      action="/"
      {...props}
      onSubmit={formSubmitHandler}
      className="[&_*]:select-none"
    >
      <Body className="dark:text-zinc-50 [&_p]:text-zinc-800 dark:[&_p]:text-zinc-300">
        {props.children}
      </Body>
      <FormSubmit buttonStyle="danger">{actionLabel || 'Continuar'}</FormSubmit>
    </Container>
  )
}
