import styled from 'styled-components'

import { DropDownMenuContainerStylesByPositionMap } from './DropDownMenuContainerStylesByPositionMap'
import { HorizontalDropDownMenuContainerStylesByPositionMap } from './HorizontalDropDownMenuContainerStylesByPositionMap'
import { DropDownMenuContainerProps } from './types'

// const resolveContainerElementY = (
//   props: DropDownMenuContainerProps
// ): number => {
//   // const containerElementWidth = 360

//   const y = props.$coordinates.listItem.y

//   // if (y + containerElementWidth >= window.innerWidth - 40) {
//   //   return y - (y - (window.innerWidth - 40))
//   // }

//   // if (window.innerWidth <= containerElementWidth) {
//   //   return 0
//   // }

//   return y
// }

export const DropDownMenuContainer = styled.div<DropDownMenuContainerProps>`
  width: 100%;
  max-width: 360px;
  background-color: #04406c;
  padding: 30px 0px;
  position: fixed;
  z-index: 10;

  ${props =>
    props.$orientation === 'vertical'
      ? DropDownMenuContainerStylesByPositionMap[props.$position || 'center']
      : HorizontalDropDownMenuContainerStylesByPositionMap[
          props.$position || 'center'
        ]}
`

export const DropDownMenuList = styled.div`
  width: 100%;
  height: calc(100%);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border: 0px none #ffffff;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }

  &::-webkit-scrollbar-thumb:active {
    background: #000000;
  }

  &::-webkit-scrollbar-track {
    background: #666666;
    border: 0px none #ffffff;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-track:hover {
    background: #666666;
  }

  &::-webkit-scrollbar-track:active {
    background: #333333;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`

export const DropDownMenuListItemContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;

  a,
  button {
    width: 100%;
    display: flex;
    color: #ffffff;
    align-items: center;
    padding: 15px 30px;
    transition: background-color 0.1s ease-in-out;
    border: 0px;
    outline: 0px;
    background-color: transparent;

    &:hover {
      background-color: #ffffff;

      * {
        color: #04406c;
      }
    }
  }
`

export const DropDownMenuListItemLabel = styled.div`
  width: 100%;
  display: inline-flex;
  padding-right: 9px;

  span {
    font-size: 14px;
    font-weight: 400;
    display: block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const DropDownMenuListItemIcon = styled.div`
  display: inline-flex;

  i {
    display: block;
    font-size: 20px;
  }
`

const NavigationButton = styled.button.attrs({
  type: 'button',
  role: 'button'
})`
  background-color: transparent;
  border: 0px;
  outline: 0px;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  width: 100%;
  color: #ffffff;
  padding: 3px 0px;

  * {
    pointer-events: none;
  }
`

export const TopNavigationButton = styled(NavigationButton)`
  top: 2px;
`

export const BottomNavigationButton = styled(NavigationButton)`
  bottom: 2px;
`
