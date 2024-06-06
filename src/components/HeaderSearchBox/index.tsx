'use client'

import { Fragment, useRef, useState } from 'react'
import { FaSistrix } from 'react-icons/fa6'

import { range } from '~/utils'
import { getElementCoordinates } from '../store/Header/helpers'
import {
  Container,
  ExpandedContainer,
  ExpandedContainerWrapper,
  List,
  ListItem,
  SearchBoxContent
} from './styles'

type HeaderSearchBoxProps = {
  expandOnFocus?: boolean
}

export type HeaderSearchBoxComponent =
  React.FunctionComponent<HeaderSearchBoxProps>

export const HeaderSearchBox: HeaderSearchBoxComponent = props => {
  const [fixed, setFixed] = useState<boolean>(false)

  const unsetFixedOnInputBlurState = useRef<boolean>(false)
  const searchBoxContentHeightState = useRef<number | 'unset'>('unset')

  const searchBoxContentRef = (
    searchBoxContentElement: HTMLDivElement | null
  ) => {
    if (searchBoxContentElement) {
      const searchBoxContentCoordinates = getElementCoordinates(
        searchBoxContentElement
      )

      const searchBoxContentHeight =
        window.innerHeight - 40 - searchBoxContentCoordinates.y

      if (searchBoxContentElement.offsetHeight >= searchBoxContentHeight) {
        searchBoxContentElement.style.height = `${searchBoxContentHeight}px`
      }
    }
  }
  // useRef<HTMLDivElement>(null)

  const inputRef = (inputElement: HTMLInputElement | null) => {
    if (inputElement && fixed) {
      inputElement.focus()
    }
  }

  const inputFocusHandler = () => {
    if (typeof props.expandOnFocus === 'boolean' && !props.expandOnFocus) {
      return
    }

    setFixed(true)
  }

  const inputBlurHandler = (event: React.BaseSyntheticEvent) => {
    if (!fixed) {
      return
    }

    if (unsetFixedOnInputBlurState.current) {
      return setFixed(false)
    }

    const inputElement = event.target as HTMLInputElement

    inputElement.focus()
  }

  const expandedContainerWrapperMouseEnterHandler = () => {
    unsetFixedOnInputBlurState.current = false
  }

  const expandedContainerWrapperMouseLeaveHandler = () => {
    unsetFixedOnInputBlurState.current = true
  }

  const SearchBoxBody = () => (
    <Fragment>
      <i>
        <FaSistrix />
      </i>
      <input
        type="text"
        name="search[query]"
        autoCapitalize="off"
        autoComplete="off"
        spellCheck="false"
        ref={inputRef}
        onBlur={inputBlurHandler}
        onFocus={inputFocusHandler}
      />
    </Fragment>
  )

  if (fixed) {
    return (
      <ExpandedContainerWrapper
        onMouseEnter={expandedContainerWrapperMouseEnterHandler}
        onMouseLeave={expandedContainerWrapperMouseLeaveHandler}
      >
        <ExpandedContainer>
          <SearchBoxBody />
        </ExpandedContainer>
        <SearchBoxContent
          ref={searchBoxContentRef}
          $height={searchBoxContentHeightState.current}
        >
          <List>
            {range(200).map(i => (
              <ListItem key={i} href="#">
                Search result here {i}
              </ListItem>
            ))}
          </List>
        </SearchBoxContent>
      </ExpandedContainerWrapper>
    )
  }

  return (
    <Container>
      <SearchBoxBody />
    </Container>
  )
}
