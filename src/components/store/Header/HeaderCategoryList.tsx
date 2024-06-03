import { useEffect, useRef, useState } from 'react'
import { FaEllipsis } from 'react-icons/fa6'

import { range } from '~/utils'
import { HeaderCategoryListItem } from './HeaderCategoryListItem'
import { EllipsisButtonWrapper, HeaderCategoryListWrapper } from './styles'

export const HeaderCategoryList = () => {
  const [showEllipsis, setShowEllipsis] = useState<boolean>(false)
  const listItemsTotalWidthState = useRef<number>(0)

  const headerCategoryListItemRef = (listItem: HTMLLIElement | null): void => {
    if (!listItem) {
      return
    }

    listItemsTotalWidthState.current += listItem.offsetWidth
    listItem.tabIndex = Math.random()
  }

  useEffect(() => {
    if (listItemsTotalWidthState.current >= window.innerWidth) {
      setShowEllipsis(true)
    }
  }, [])

  const categories = range(300)

  return (
    <HeaderCategoryListWrapper>
      <ul>
        {categories.map(category => (
          <HeaderCategoryListItem
            key={category}
            ref={headerCategoryListItemRef}
          />
        ))}
      </ul>
      {showEllipsis && (
        <EllipsisButtonWrapper>
          <button type="button">
            <FaEllipsis />
          </button>
        </EllipsisButtonWrapper>
      )}
    </HeaderCategoryListWrapper>
  )
}
