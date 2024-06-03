import { generateRandomId } from '~/utils'
import {
  ButtonElement,
  ButtonElementWrapper,
  CheckIcon,
  CheckIconWrapper,
  Container
} from './styles'

type CheckButtonProps = {
  type?: 'checkbox' | 'radio'
}

type CheckButtonComponent = React.FunctionComponent<
  React.PropsWithChildren &
    React.InputHTMLAttributes<HTMLInputElement> &
    CheckButtonProps
>

export const CheckButton: CheckButtonComponent = ({ children, ...props }) => {
  const inputId = generateRandomId()

  return (
    <Container>
      <ButtonElement htmlFor={inputId}>
        <input id={inputId} {...props} type="checkbox" />
        <CheckIconWrapper className="check-icon-wrapper">
          <CheckIcon />
        </CheckIconWrapper>
        <ButtonElementWrapper>{children}</ButtonElementWrapper>
      </ButtonElement>
    </Container>
  )
}
