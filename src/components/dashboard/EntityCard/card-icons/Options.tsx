import { Fragment, useEffect, useRef, useState } from 'react'

import { getParentButtonElement } from '~/utils'

import { CardIconDropDownMenuListItemElement } from './CardIconDropDownMenuListItemElement'
import { IconElement } from './IconElement'
import {
  CardIconDropDownMenu,
  CardIconDropDownMenuList,
  CardIconDropDownMenuProps
} from './styles'
import { EntityCardOptions, IconButtonComponent } from './types'

export const Options: IconButtonComponent = props => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false)
  // const [hideDropDownOnBlur, setHideDropDownOnBlur] = useState<boolean>(true);
  const hideDropDownOnBlurState = useRef<boolean>(true)
  const [dropDownMenuAxis, setDropDownMenuAxis] =
    useState<CardIconDropDownMenuProps>({
      $left: 0,
      $top: 0
    })

  const clickHandler: React.MouseEventHandler = event => {
    event.preventDefault()

    if (typeof props.onViewOptions === 'function') {
      props.onViewOptions()
    }

    const buttonElement = getParentButtonElement(event.target as HTMLElement)

    buttonElement.tabIndex = Math.random()
    buttonElement.focus()

    const cardIconDropDownMenuWidth = 270
    const buttonElementRect = buttonElement.getBoundingClientRect()
    const updatedDropDownMenuAxis: CardIconDropDownMenuProps = {
      $left: buttonElementRect.x,
      $top: buttonElementRect.y + buttonElementRect.height
    }

    if (buttonElementRect.x + cardIconDropDownMenuWidth >= window.innerWidth) {
      updatedDropDownMenuAxis.$left -=
        cardIconDropDownMenuWidth - buttonElementRect.width
    }

    setDropDownMenuAxis(updatedDropDownMenuAxis)
    setShowDropDown(!showDropDown)
  }

  useEffect(() => {
    const windowScrollHandler = () => {
      hideDropDownOnBlurState.current = true
      setShowDropDown(false)
    }

    window.addEventListener('scroll', windowScrollHandler)

    return () => {
      window.removeEventListener('scroll', windowScrollHandler)
    }
  }, [])

  const blurHandler: React.FocusEventHandler<HTMLButtonElement> = event => {
    if (hideDropDownOnBlurState.current) {
      return setShowDropDown(false)
    }

    event.target.focus()
  }

  const cardIconDropDownMenuMouseEnterHandler = () => {
    hideDropDownOnBlurState.current = false
  }

  const cardIconDropDownMenuMouseLeaveHandler = () => {
    hideDropDownOnBlurState.current = true
  }

  const hasOptions = (options: any): options is EntityCardOptions =>
    Boolean(props.options instanceof Array && props.options.length >= 1)

  return (
    <Fragment>
      <IconElement
        name="FaEllipsisVertical"
        title="Opções"
        onClick={clickHandler}
        onBlur={blurHandler}
      />
      {showDropDown && hasOptions(props.options) && (
        <CardIconDropDownMenu
          {...dropDownMenuAxis}
          onMouseEnter={cardIconDropDownMenuMouseEnterHandler}
          onMouseLeave={cardIconDropDownMenuMouseLeaveHandler}
        >
          <CardIconDropDownMenuList>
            {props.options.map((option, optionIndex) => (
              <CardIconDropDownMenuListItemElement
                key={optionIndex}
                option={option}
              />
            ))}
          </CardIconDropDownMenuList>
        </CardIconDropDownMenu>
      )}
    </Fragment>
  )
}
