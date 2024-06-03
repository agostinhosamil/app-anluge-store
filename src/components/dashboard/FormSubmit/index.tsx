import { Container, FormSubmitStyle } from './styles'

type FormSubmitProps = {
  buttonStyle?: FormSubmitStyle
}

type FormSubmitComponent = React.FunctionComponent<
  React.PropsWithChildren &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    FormSubmitProps
>

export const FormSubmit: FormSubmitComponent = ({ buttonStyle, ...props }) => {
  return (
    <Container $style={buttonStyle || 'primary'}>
      <button type="submit" {...props}>
        {props.children}
      </button>
    </Container>
  )
}
