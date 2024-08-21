'use client'

type FormWrapperProps = {
  onSubmit?: (event: SubmitEvent) => void
}

type FormWrapperComponent = React.FunctionComponent<
  React.PropsWithChildren<FormWrapperProps>
>

export const FormWrapper: FormWrapperComponent = props => {
  const elementRef = (element: HTMLDivElement | null) => {
    if (!element) {
      return
    }

    const formElement = element.querySelector<HTMLFormElement>('form')

    if (formElement instanceof HTMLFormElement) {
      formElement.addEventListener('submit', (event: SubmitEvent) => {
        event.preventDefault()

        if (typeof props.onSubmit === 'function') {
          props.onSubmit(event)
        }
      })
    }
  }

  return (
    <div className="w-full block" ref={elementRef}>
      {props.children}
    </div>
  )
}
