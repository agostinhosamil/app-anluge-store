import styled, { css } from 'styled-components'

export const Root = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`

export const Container = styled(Root)`
  overflow: hidden;
`

type WrapperProps = {
  $x: number
  $grabbing?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  width: max-content;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 20px;
  white-space: nowrap;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => props.$x}px);

  &.x-grabbing-wrapper-element {
    cursor: grab;

    * {
      cursor: inherit;
    }
  }

  * {
    user-select: none;
    -webkit-user-select: none;
  }
`

const leftNavigationButtonWrapperStyles = css`
  left: 25px;
`

const rightNavigationButtonWrapperStyles = css`
  right: 25px;
`

type NavigationButtonWrapperProps = {
  $position: 'left' | 'right'
}

export const NavigationButtonWrapper = styled.div<NavigationButtonWrapperProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  ${props =>
    props.$position === 'left'
      ? leftNavigationButtonWrapperStyles
      : rightNavigationButtonWrapperStyles}

  button {
    width: 100%;
    height: 100%;
    outline: 0px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    background-color: rgb(255 255 255 / 34%);
    border: 0px;
    display: flex;
    cursor: pointer;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 27px;
    font-weight: 200;
    color: #383838;
    box-shadow: 0px 0px 20px 11px rgb(0 0 0 / 7%);
    transition: all 0.2s ease-in-out;

    i {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: max-content;
      pointer-events: none;
    }

    &:hover {
      background-color: rgb(255 255 255 / 54%);
      transform: scale(1.1);
    }

    &:active {
      background-color: rgb(255 255 255 / 84%);
      transform: scale(0.978);
    }
  }
`
