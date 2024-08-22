import { useEffect, useState } from 'react'

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

  const dialogBoxElementRef = (dialogBoxElement: HTMLDivElement): void => {
    if (!dialogBoxElement) {
      return
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
    <Container $centerContent={centerDialogBox}>
      <DialogBox $size={props.size} ref={dialogBoxElementRef}>
        {titled && (
          <TitleWrapper>
            <Title>{props.title}</Title>
          </TitleWrapper>
        )}
        <DialogBoxBody>{props.children}</DialogBoxBody>
        {!doNotShowButton && (
          <CloseButtonWrapper>
            <CloseButton onClick={closeButtonClickHandler} type="button">
              {(labeledCloseButton() && props.closeButtonLabel) || 'Cancelar'}
            </CloseButton>
          </CloseButtonWrapper>
        )}
      </DialogBox>
    </Container>
  )
}
