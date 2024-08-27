import styled from 'styled-components'

const dialogBoxSizesMap = {
  default: 720,
  small: 380,
  'x-small': 280,
  medium: 480,
  large: 620,
  'x-large': 920,
  'xx-large': 1200
}

export type DialogBoxSize = keyof typeof dialogBoxSizesMap

export type DialogBoxProps = {
  $size?: DialogBoxSize
}

export type ContainerProps = {
  $centerContent?: boolean
}

const shouldCenterContent = (props: ContainerProps) =>
  !(typeof props.$centerContent === 'boolean' && !props.$centerContent)

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  z-index: 12;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgb(0 0 0 / 70%);
  backdrop-filter: blur(8px);
  padding: ${props => (shouldCenterContent(props) ? 40 : 120)}px;
  overflow-y: ${props => (shouldCenterContent(props) ? 'unset' : 'auto')};
  display: flex;
  flex-direction: row;
  align-items: ${props =>
    shouldCenterContent(props) ? 'center' : 'flex-start'};
  justify-content: center;
`

export const DialogBox = styled.div<DialogBoxProps>`
  width: 100%;
  max-width: ${props => dialogBoxSizesMap[props.$size || 'default']}px;
  padding: 24px 30px;
  border-radius: 12px;
  -webkit-border-radius: 12px;
  box-shadow: 0px 0px 15px 2px rgb(0 0 0 / 8%);
  position: relative;
`

export const DialogBoxBody = styled.div`
  width: 100%;
  height: auto;
  display: block;
`

export const CloseButtonWrapper = styled.div`
  width: 100%;
  padding: 15px 0px 0px;
  display: flex;
  justify-content: center;
`

export const CloseButton = styled.button`
  border: 0px;
  outline: 0px;
  background-color: transparent;

  &:hover {
    text-decoration: underline;
  }
`

export const TitleWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 0px 0px 25px;
`

export const Title = styled.h1`
  font-size: 27px;
  font-weight: 800;
`
