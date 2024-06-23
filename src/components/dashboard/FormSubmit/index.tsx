import { Spinner } from 'react-bootstrap'

import { Container, FormSubmitStyle } from './styles'

type FormSubmitProps = {
  buttonStyle?: FormSubmitStyle
  loading?: boolean
}

type FormSubmitComponent = React.FunctionComponent<
  React.PropsWithChildren &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    FormSubmitProps
>

export const FormSubmit: FormSubmitComponent = ({
  buttonStyle,
  loading,
  ...props
}) => {
  return (
    <Container $style={buttonStyle || 'primary'}>
      <button
        type="submit"
        {...props}
        disabled={typeof loading === 'boolean' ? loading : props.disabled}
      >
        {loading && (
          <i>
            <Spinner size="sm" />
          </i>
        )}
        {props.children}
      </button>
    </Container>
  )
}
