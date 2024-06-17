import styled from 'styled-components'

import { simpleScrollBarStyles } from '@styles/scrollbars'
import { BubbleMenu } from '@tiptap/react'

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: block;
  padding: 10px 0px;
`

export const FixedContainer = styled(Container)`
  position: fixed;
  background-color: #ffffff;
  height: 100vh;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 20;
  padding: 70px 50px 50px;
  overflow-y: auto;

  & > div:nth-child(2) {
    border: 0px;
  }

  ${simpleScrollBarStyles}
`

export const EditorBody = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 20px;
  border: 1px solid #dee4ea;
  margin: 20px auto;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  position: relative;
  /* box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px; */

  & > div > div {
    outline: 0px;
    min-height: 900px;

    * {
      white-space: break-spaces;
      word-break: break-word;
    }
  }
`

export const EditorMenuContainer = styled.div`
  width: 100%;
  height: auto;
  display: block;
  padding: 9px;
  border: 1px solid #dee4ea;
  /* background-color: #e8eff6; */
  border-radius: 8px;
  -webkit-border-radius: 8px;
`

export const FixedEditorMenuContainer = styled(EditorMenuContainer)`
  width: calc(100% - 6px);
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #ffffff;
  border-top-width: 0px;
  border-radius: 0px;
  -webkit-border-radius: 0px;
  z-index: 2;
  border: 0px;
  padding: 40px 20px;
`

export const EditorMenuList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const EditorMenuListItem = styled.li`
  display: inline-flex;
  margin: 0px 0px 0px 6px;
  position: relative;
  flex-direction: column;
  align-items: center;

  &:nth-child(1) {
    margin: 0px;
  }
`

export const EditorMenuButton = styled.button`
  background-color: transparent;
  border: 0px;
  outline: 0px;
  color: #404040;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 2px;
  padding: 3px 7px 2px;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  height: 30px;
  position: relative;

  &.x-active {
    background-color: #d7dce6;
  }

  &:not(:disabled) {
    &.x-active {
      background-color: #d7dce6;
    }

    &:hover {
      background-color: #d7dce6;
    }

    &:active {
      background-color: #cad2e0;
    }
  }
`

export const EditorMenuButtonIconWrapper = styled.i`
  display: inline-flex;
  margin: 0px 5px;
  font-size: 13px;
`

export const EditorMenuButtonLabelWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  margin: 1px 5px 0px 0px;

  span {
    font-size: 13px;
    white-space: nowrap;
  }
`

export const EditorMenuButtonBody = styled.div`
  display: inline-flex;
`

export const Separator = styled.div`
  width: 1px;
  height: 30px;
  background-color: #dee4ea;
`

export const FontSizeInput = styled.input`
  width: 40px;
  border: 1px solid #dee4ea;
  height: 30px;
  outline: 0px;
  padding: 0px 10px;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  text-align: center;
`

type SelectedTextHighlightColorProps = {
  $color?: string
}

export const SelectedTextHighlightColor = styled.div<SelectedTextHighlightColorProps>`
  width: 70%;
  height: 3px;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  background-color: ${props => props.$color || 'transparent'};
  position: absolute;
  bottom: 4px;
  left: 50%;
  margin-left: calc(-15% + -6px);
  pointer-events: none;
`

type EditorMenuButtonDropdownProps = {
  $width?: number
}

export const EditorMenuButtonDropdown = styled.div<EditorMenuButtonDropdownProps>`
  width: ${props =>
    typeof props.$width === 'number' ? `${props.$width}px` : 'max-content'};
  height: auto;
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  /* margin-left: -${props =>
    typeof props.$width === 'number' ? props.$width / 2 : 150}px; */
  background-color: #ffffff;
  padding: 20px;
  border-radius: 4px;
  top: calc(100% + 2px);
  box-shadow: rgb(0 0 0 / 15%) 0px 12px 12px 0px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 10;
`

export const StyledBubbleMenu = styled(BubbleMenu)`
  z-index: 300;
  border: 2px solid red;
`

export const ButtonDropdownIconWrapper = styled.div`
  display: inline-flex;
  margin-right: 2px;

  i {
    font-size: 7px;
  }
`

export const EditorHeadingVariantsList = styled.div`
  width: 250px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

type EditorHeadingVariantProps = {
  $size: number
}

export const EditorHeadingVariant = styled.button.attrs({
  type: 'button',
  role: 'button'
})<EditorHeadingVariantProps>`
  width: 100%;
  height: auto;
  border: 0px;
  outline: 0px;
  padding: 7px 14px;
  text-align: left;
  background-color: transparent;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${props => props.$size * 40}%;

  &.x-active {
    background-color: #f0f0f0;
  }

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #dbdbdb;
  }
`
