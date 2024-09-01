import { useEffect, useRef, useState } from 'react'

import {
  CloseButton,
  CloseButtonWrapper,
  Container,
  DialogBox,
  DialogBoxBody,
  DialogBoxSize,
  Title,
  TitleWrapper
} from './styles'

type DialogProps = {
  show?: boolean
  size?: DialogBoxSize
  onClose?: () => void
  title?: string
  showButton?: boolean
  closeButtonLabel?: string
}

type DialogComponent = React.FunctionComponent<
  React.PropsWithChildren & DialogProps
>

export const Dialog: DialogComponent = props => {
  const [show, setShow] = useState<boolean>(props.show || false)
  const [centerDialogBox, setCenterDialogBox] = useState<boolean>(true)

  const dialogBoxElementRefState = useRef<HTMLDivElement>()

  const dialogBoxElementRef = (dialogBoxElement: HTMLDivElement): void => {
    if (!dialogBoxElement) {
      return
    }

    dialogBoxElementRefState.current = dialogBoxElement

    if (dialogBoxElement.parentNode instanceof HTMLElement) {
      document.body.appendChild(dialogBoxElement.parentNode)
    }

    const dialogBoxElementHeight = dialogBoxElement.offsetHeight

    if (dialogBoxElementHeight >= window.innerHeight - 80) {
      setCenterDialogBox(false)
    }
  }

  // const updateDialogBox = () => {
  //   if (!dialogBoxElementRef.current) {
  //     return;
  //   }

  //   const dialogBoxElementHeight = dialogBoxElementRef.current.offsetHeight;

  //   if (dialogBoxElementHeight >= window.innerHeight - 80) {
  //     setCenterDialogBox(false);
  //   }
  // };

  useEffect(() => {
    setShow(props.show || false)

    return () => {
      const dialogBoxElement = dialogBoxElementRefState.current

      if (
        dialogBoxElement &&
        dialogBoxElement.parentNode instanceof HTMLDivElement
      ) {
        const dialogBoxElementParent = dialogBoxElement.parentNode
        dialogBoxElementParent.parentNode?.removeChild(dialogBoxElementParent)
      }
    }
  }, [props.show])

  // useEffect(updateDialogBox, []);

  if (!show) {
    return null
  }

  const closeButtonClickHandler = () => {
    setShow(false)

    if (typeof props.onClose === 'function') {
      props.onClose()
    }
  }

  const labeledCloseButton = () =>
    Boolean(
      typeof props.closeButtonLabel === 'string' &&
        /\S/.test(props.closeButtonLabel)
    )

  const titled = Boolean(
    typeof props.title === 'string' && /\S/.test(props.title)
  )

  const doNotShowButton =
    typeof props.showButton === 'boolean' && !props.showButton

  return (
    <div>
      <Container $centerContent={centerDialogBox}>
        <DialogBox
          $size={props.size}
          ref={dialogBoxElementRef}
          className="bg-zinc-50 dark:bg-zinc-900"
        >
          {titled && (
            <TitleWrapper>
              <Title className="text-zinc-950 dark:text-zinc-50">
                {props.title}
              </Title>
            </TitleWrapper>
          )}
          <DialogBoxBody>{props.children}</DialogBoxBody>
          {!doNotShowButton && (
            <CloseButtonWrapper>
              <CloseButton
                onClick={closeButtonClickHandler}
                type="button"
                className="dark:text-zinc-400"
              >
                {(labeledCloseButton() && props.closeButtonLabel) || 'Cancelar'}
              </CloseButton>
            </CloseButtonWrapper>
          )}
        </DialogBox>
      </Container>
    </div>
  )
}
