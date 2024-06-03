import { forwardRef, useRef, useState } from 'react'
import { DropDownMenu } from './DropDownMenu'
import { Coordinates } from './types'

import { coordinatesFactory, getElementAndMouseCoordinates } from './helpers'
import { HeaderCategoryListItemButton } from './styles'

export const HeaderCategoryListItem = forwardRef<HTMLLIElement>(
  function HeaderCategoryListItem(props, ref) {
    // const dropDownMenuRef = useRef<HTMLDivElement>(null)

    const hideMenuOnListItemBlurState = useRef<boolean>(false)

    const [coordinates, setCoordinates] =
      useState<Coordinates>(coordinatesFactory())
    const [showMenu, setShowMenu] = useState<boolean>(false)

    const buttonClickHandler: React.MouseEventHandler = event => {
      const targetElement = event.target as HTMLButtonElement

      if (targetElement.parentNode instanceof HTMLElement) {
        targetElement.parentNode.focus()

        // const listItemCoordinates = targetElement.getBoundingClientRect()

        setCoordinates(getElementAndMouseCoordinates(event, targetElement))
      }

      setShowMenu(!showMenu)
    }

    const listItemBlurHandler = (event: React.BaseSyntheticEvent) => {
      // if (dropDownMenuRef.current) {
      //   const dropDownMenuCoords = dropDownMenuRef.current.getBoundingClientRect()
      // }
      if (hideMenuOnListItemBlurState.current) {
        return setShowMenu(false)
      }

      const listItemElement = event.target as HTMLDivElement

      listItemElement.focus()
    }

    const dropDownMouseEnterHandler = () => {
      hideMenuOnListItemBlurState.current = false
    }

    const dropDownMouseLeaveHandler = () => {
      hideMenuOnListItemBlurState.current = true
    }

    return (
      <li ref={ref} {...props} onBlur={listItemBlurHandler}>
        <HeaderCategoryListItemButton
          type="button"
          role="button"
          onClick={buttonClickHandler}
        >
          Categoria Name Here should be {5}
        </HeaderCategoryListItemButton>
        {showMenu && (
          <DropDownMenu
            coordinates={coordinates}
            onMouseEnter={dropDownMouseEnterHandler}
            onMouseLeave={dropDownMouseLeaveHandler}
          />
        )}
      </li>
    )
  }
)
