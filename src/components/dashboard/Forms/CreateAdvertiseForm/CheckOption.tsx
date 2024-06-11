import { useId } from 'react'
import {
  CheckOptionBody,
  CheckOptionContainer,
  CheckOptionContent
} from './styles'

type CheckOptionProps = {
  label: string
}

type CheckOptionComponent = React.FunctionComponent<
  React.InputHTMLAttributes<HTMLInputElement> &
    React.PropsWithChildren &
    CheckOptionProps
>

export const CheckOption: CheckOptionComponent = props => {
  const fieldId = useId()

  return (
    <CheckOptionContainer>
      <input type="checkbox" {...props} id={fieldId} />
      <CheckOptionContent htmlFor={fieldId}>
        <CheckOptionBody>{props.label}</CheckOptionBody>
      </CheckOptionContent>
    </CheckOptionContainer>
  )
}
