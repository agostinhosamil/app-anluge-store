import { ChainedCommands } from '@tiptap/react'
import { Fragment, useRef, useState } from 'react'
import * as Icon from 'react-icons/fa6'
import { FontAwesome6IconName } from 'Types/react-icons'

import { Dialog } from '@components/Dialog'
import { getParentButtonElement, noEmpty } from '~/utils'

import { useRichTextFieldContext } from './hooks'
import {
  ButtonDropdownIconWrapper,
  EditorMenuButton,
  EditorMenuButtonBody,
  EditorMenuButtonDropdown,
  EditorMenuButtonIconWrapper,
  EditorMenuButtonLabelWrapper
} from './styles'

type ButtonProps = {
  icon?: FontAwesome6IconName
  label?: string
  dropdown?: boolean
  dropdownStyle?: 'standard' | 'dialog'
  dropdownWidth?: number
  onClick?: (chain: ChainedCommands) => ChainedCommands | void
}

type ButtonComponent = React.FunctionComponent<
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & ButtonProps
>

type EditorMenuButtonDropdownWrapperProps = {
  dropdownWidth?: number
}

const DialogWrapper: React.FunctionComponent<
  React.PropsWithChildren
> = props => {
  return <Dialog show={false}>{props.children}</Dialog>
}

const EditorMenuButtonDropdownWrapper: React.FunctionComponent<
  React.PropsWithChildren &
    React.HTMLAttributes<HTMLDivElement> &
    EditorMenuButtonDropdownWrapperProps
> = ({ children, dropdownWidth, ...props }) => {
  return (
    <EditorMenuButtonDropdown $width={dropdownWidth} {...props}>
      {children}
    </EditorMenuButtonDropdown>
  )
}

export const Button: ButtonComponent = ({
  icon,
  label,
  dropdown,
  dropdownStyle,
  dropdownWidth,
  ...props
}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  const hideDropdownOnBlurState = useRef<boolean>(false)

  const { editor } = useRichTextFieldContext()

  const EditorMenuButtonIcon = Icon[icon || 'Fa0']

  const buttonClickHandler: React.MouseEventHandler = event => {
    if (dropdown) {
      const buttonElement = getParentButtonElement(event.target as HTMLElement)

      buttonElement.tabIndex = Math.round(Math.random() * Date.now())

      setShowDropdown(!showDropdown)
    }

    if (editor && typeof props.onClick !== 'undefined') {
      const command = props.onClick(editor.chain())

      return typeof command === 'object' ? command.run() : command
    }
  }

  const buttonBlurHandler: React.FocusEventHandler = event => {
    const buttonElement = event.target as HTMLButtonElement

    if (dropdown) {
      if (hideDropdownOnBlurState.current) {
        return setShowDropdown(false)
      }

      buttonElement.focus()
    }
  }

  const EditorMenuButtonDropdownWrapperMouseEnterHandler: React.MouseEventHandler =
    () => {
      hideDropdownOnBlurState.current = false
    }

  const EditorMenuButtonDropdownWrapperMouseLeaveHandler: React.MouseEventHandler =
    () => {
      hideDropdownOnBlurState.current = true
    }

  const isDropdown = Boolean(typeof dropdown === 'boolean' && dropdown)

  const EditorMenuButtonBodyWrapper = !isDropdown
    ? Fragment
    : dropdownStyle === 'dialog'
      ? DialogWrapper
      : EditorMenuButtonDropdownWrapper

  const editorMenuButtonBodyWrapperProps =
    dropdownStyle === 'dialog'
      ? {}
      : {
          dropdownWidth,
          onMouseEnter: EditorMenuButtonDropdownWrapperMouseEnterHandler,
          onMouseLeave: EditorMenuButtonDropdownWrapperMouseLeaveHandler
        }

  const ButtonDropdownIcon = showDropdown ? Icon.FaAngleUp : Icon.FaAngleDown

  return (
    <Fragment>
      <EditorMenuButton
        {...props}
        type="button"
        role="button"
        onClick={buttonClickHandler}
        onBlur={buttonBlurHandler}
      >
        {icon && (
          <EditorMenuButtonIconWrapper>
            <EditorMenuButtonIcon />
          </EditorMenuButtonIconWrapper>
        )}
        {noEmpty(label) && (
          <EditorMenuButtonLabelWrapper>
            <span>{label}</span>
          </EditorMenuButtonLabelWrapper>
        )}
        {dropdown && (
          <ButtonDropdownIconWrapper>
            <i>
              <ButtonDropdownIcon />
            </i>
          </ButtonDropdownIconWrapper>
        )}
      </EditorMenuButton>
      {props.children && isDropdown && showDropdown && (
        <EditorMenuButtonBodyWrapper {...editorMenuButtonBodyWrapperProps}>
          <EditorMenuButtonBody>{props.children}</EditorMenuButtonBody>
        </EditorMenuButtonBodyWrapper>
      )}
    </Fragment>
  )
}
