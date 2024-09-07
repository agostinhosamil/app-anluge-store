'use client'

import { useId, useState } from 'react'

import { Body, Container, Content, Label, LabelWrapper } from './styles'

type LongTextFieldProps = {
  label?: string
}

type LongTextFieldComponent = React.FunctionComponent<
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & LongTextFieldProps
>

export const LongTextField: LongTextFieldComponent = props => {
  const [focus, setFocus] = useState<boolean>(false)
  const [removeFocusOnTextAreaBlur, setRemoveFocusOnTextAreaBlur] =
    useState<boolean>(true)

  const fieldId = useId()

  const labeled = Boolean(
    typeof props.label === 'string' && /\S/.test(props.label)
  )

  const textAreaFocusHandler = () => {
    setFocus(true)
  }

  const textAreaBlurHandler = (event: React.FocusEvent) => {
    if (removeFocusOnTextAreaBlur) {
      return setFocus(false)
    }

    ;(event.target as HTMLTextAreaElement).focus()
  }

  const containerMouseEnterHandler = () => {
    setRemoveFocusOnTextAreaBlur(false)
  }

  const containerMouseLeaveHandler = () => {
    setRemoveFocusOnTextAreaBlur(true)
  }

  return (
    <Container
      $focus={focus}
      htmlFor={fieldId}
      onMouseEnter={containerMouseEnterHandler}
      onMouseLeave={containerMouseLeaveHandler}
      className="bg-zinc-50 dark:bg-zinc-800 dark:[&_*]:text-zinc-50 dark:border-zinc-600"
    >
      <Body>
        {labeled && (
          <LabelWrapper>
            <Label>{props.label}</Label>
          </LabelWrapper>
        )}
        <Content>
          <textarea
            {...props}
            id={fieldId}
            onFocus={textAreaFocusHandler}
            onBlur={textAreaBlurHandler}
          />
        </Content>
      </Body>
    </Container>
  )
}
