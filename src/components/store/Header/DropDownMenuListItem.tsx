import Link from 'next/link'
import { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa6'

import { DropDownMenu } from './DropDownMenu'
import {
  DropDownMenuListItemContainer,
  DropDownMenuListItemIcon,
  DropDownMenuListItemLabel
} from './HeaderCategoryListItemStyles'
import { coordinatesFactory, getElementAndMouseCoordinates } from './helpers'
import { Coordinates } from './types'

export const DropDownMenuListItem = () => {
  const [coordinates, setCoordinates] =
    useState<Coordinates>(coordinatesFactory())
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false)

  const dropDownMenuListItemContainerMouseEnterHandler: React.MouseEventHandler =
    event => {
      const targetElement = event.target as HTMLElement

      setCoordinates(getElementAndMouseCoordinates(event, targetElement))
      setShowSubMenu(true)
    }

  return (
    <DropDownMenuListItemContainer
      onMouseEnter={dropDownMenuListItemContainerMouseEnterHandler}
    >
      <Link href="#">
        <DropDownMenuListItemLabel>
          <span>Subcategoria A da categoria 1 {Math.random()}</span>
        </DropDownMenuListItemLabel>
        <DropDownMenuListItemIcon>
          <i>
            <FaAngleRight />
          </i>
        </DropDownMenuListItemIcon>
      </Link>
      {showSubMenu && (
        <DropDownMenu coordinates={coordinates} orientation="horizontal" />
      )}
    </DropDownMenuListItemContainer>
  )
}
