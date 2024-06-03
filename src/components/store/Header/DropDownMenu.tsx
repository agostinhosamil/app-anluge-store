import { Fragment, useRef } from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa6'

import { range } from '~/utils'
import { DropDownMenuListItem } from './DropDownMenuListItem'
import {
  BottomNavigationButton,
  DropDownMenuContainer,
  DropDownMenuList,
  TopNavigationButton
} from './HeaderCategoryListItemStyles'
import {
  getDropDownMenuContainerProps,
  getHorizontalDropDownMenuContainerProps
} from './helpers'
import { Coordinates, DropDownMenuContainerOrientation } from './types'

type DropDownMenuProps = React.HTMLAttributes<HTMLDivElement> & {
  coordinates: Coordinates
  orientation?: DropDownMenuContainerOrientation
}

type DropDownMenuComponent = React.FunctionComponent<DropDownMenuProps>

/* export const DropDownMenu = forwardRef<HTMLDivElement, DropDownMenuProps>(
  function DropDownMenu({ coordinates, ...props }, ref) {
    const dropDownMenuListRef = useRef<HTMLDivElement>(null)
    const showNavigationButtonState = useRef<boolean>(true)
    const scrollingDropDownListState = useRef<NodeJS.Timeout>()

    const menuItems = range(100)

    const getDropDownMenuContainerProps = () => {
      const dropDownContainerProps: DropDownMenuContainerProps = {
        $coordinates: coordinates,
        $position: 'center'
      }

      if (coordinates.listItem.yh <= window.innerHeight * 0.4) {
        dropDownContainerProps.$position = 'bottom'
        dropDownContainerProps.$height =
          window.innerHeight - (coordinates.listItem.yh + 35)
      } else if (coordinates.listItem.y >= window.innerHeight * 0.6) {
        dropDownContainerProps.$height = coordinates.listItem.y - (15 + 20)
        dropDownContainerProps.$position = 'top'
      }

      return dropDownContainerProps
    }

    const scrollDropDownList = (value: number): void => {
      if (!dropDownMenuListRef.current) {
        return
      }

      dropDownMenuListRef.current.scrollBy({
        top: value,
        behavior: 'smooth'
      })
    }

    // const topNavigationButtonClickHandler = () => {
    //   scrollDropDownList(-110)
    // }

    // const bottomNavigationButtonClickHandler = () => {
    //   scrollDropDownList(110)
    // }

    const topNavigationButtonMouseDownHandler = () => {
      scrollingDropDownListState.current = setInterval(() => {
        scrollDropDownList(-110)
      }, 100)
    }

    const topNavigationButtonMouseUpHandler = () => {
      clearInterval(scrollingDropDownListState.current)

      scrollingDropDownListState.current = undefined
    }

    const bottomNavigationButtonMouseDownHandler = () => {
      scrollingDropDownListState.current = setInterval(() => {
        scrollDropDownList(110)
      }, 100)
    }

    const bottomNavigationButtonMouseUpHandler = () => {
      clearInterval(scrollingDropDownListState.current)

      scrollingDropDownListState.current = undefined
    }

    if (!(typeof window !== typeof undefined)) {
      return null
    }

    return (
      <DropDownMenuContainer
        {...props}
        ref={ref}
        {...getDropDownMenuContainerProps()}
      >
        <DropDownMenuList ref={dropDownMenuListRef}>
          {menuItems.map(i => (
            <DropDownMenuListItem key={i} />
          ))}
        </DropDownMenuList>
        {showNavigationButtonState.current && (
          <Fragment>
            <TopNavigationButton
              // onClick={topNavigationButtonClickHandler}
              onMouseDown={topNavigationButtonMouseDownHandler}
              onMouseUp={topNavigationButtonMouseUpHandler}
              // onMouseEnter={topNavigationButtonMouseDownHandler}
              // onMouseLeave={topNavigationButtonMouseDownHandler}
            >
              <FaCaretUp />
            </TopNavigationButton>
            <BottomNavigationButton
              // onClick={bottomNavigationButtonClickHandler}
              onMouseDown={bottomNavigationButtonMouseDownHandler}
              onMouseUp={bottomNavigationButtonMouseUpHandler}
              // onMouseEnter={bottomNavigationButtonMouseDownHandler}
              // onMouseLeave={bottomNavigationButtonMouseUpHandler}
            >
              <FaCaretDown />
            </BottomNavigationButton>
          </Fragment>
        )}
      </DropDownMenuContainer>
    )
  }
) */

export const DropDownMenu: DropDownMenuComponent = ({
  coordinates,
  ...props
}) => {
  const dropDownMenuListRef = useRef<HTMLDivElement>(null)
  const showNavigationButtonState = useRef<boolean>(true)
  const scrollingDropDownListState = useRef<NodeJS.Timeout>()

  const menuItems = range(100)

  const scrollDropDownList = (value: number): void => {
    if (!dropDownMenuListRef.current) {
      return
    }

    dropDownMenuListRef.current.scrollBy({
      top: value,
      behavior: 'smooth'
    })
  }

  // const topNavigationButtonClickHandler = () => {
  //   scrollDropDownList(-110)
  // }

  // const bottomNavigationButtonClickHandler = () => {
  //   scrollDropDownList(110)
  // }

  const topNavigationButtonMouseDownHandler = () => {
    scrollingDropDownListState.current = setInterval(() => {
      scrollDropDownList(-110)
    }, 100)
  }

  const topNavigationButtonMouseUpHandler = () => {
    clearInterval(scrollingDropDownListState.current)

    scrollingDropDownListState.current = undefined
  }

  const bottomNavigationButtonMouseDownHandler = () => {
    scrollingDropDownListState.current = setInterval(() => {
      scrollDropDownList(110)
    }, 100)
  }

  const bottomNavigationButtonMouseUpHandler = () => {
    clearInterval(scrollingDropDownListState.current)

    scrollingDropDownListState.current = undefined
  }

  if (!(typeof window !== typeof undefined)) {
    return null
  }

  const dropDownMenuContainerProps =
    props.orientation !== 'horizontal'
      ? getDropDownMenuContainerProps({ coordinates })
      : getHorizontalDropDownMenuContainerProps({ coordinates })

  return (
    <DropDownMenuContainer {...props} {...dropDownMenuContainerProps}>
      <DropDownMenuList ref={dropDownMenuListRef}>
        {menuItems.map(i => (
          <DropDownMenuListItem key={i} />
        ))}
      </DropDownMenuList>
      {showNavigationButtonState.current && (
        <Fragment>
          <TopNavigationButton
            // onClick={topNavigationButtonClickHandler}
            onMouseDown={topNavigationButtonMouseDownHandler}
            onMouseUp={topNavigationButtonMouseUpHandler}
            // onMouseEnter={topNavigationButtonMouseDownHandler}
            // onMouseLeave={topNavigationButtonMouseDownHandler}
          >
            <FaCaretUp />
          </TopNavigationButton>
          <BottomNavigationButton
            // onClick={bottomNavigationButtonClickHandler}
            onMouseDown={bottomNavigationButtonMouseDownHandler}
            onMouseUp={bottomNavigationButtonMouseUpHandler}
            // onMouseEnter={bottomNavigationButtonMouseDownHandler}
            // onMouseLeave={bottomNavigationButtonMouseUpHandler}
          >
            <FaCaretDown />
          </BottomNavigationButton>
        </Fragment>
      )}
    </DropDownMenuContainer>
  )
}
