'use client'

import { Fragment, useRef, useState } from 'react'
import { FaSistrix } from 'react-icons/fa6'

import { noEmpty } from '~/utils'
import { useProduct } from '~/utils/hooks/useProduct'
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
  const [query, setQuery] = useState<string>()

  const unsetFixedOnInputBlurState = useRef<boolean>(false)
  const searchBoxContentHeightState = useRef<number | 'unset'>('unset')

  const productsState = useProduct(
    `match.name:contains=${encodeURIComponent(query || '')}`
  )

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

  const inputFieldChangeHandler: React.ChangeEventHandler = event => {
    const query = (event.target as HTMLInputElement).value

    // if (query) {
    setQuery(query)
    // }

    // productsState.reloadProductsByQuery(query)
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
        value={query}
        ref={inputRef}
        onBlur={inputBlurHandler}
        onFocus={inputFocusHandler}
        onChange={inputFieldChangeHandler}
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
          {noEmpty(query) && !productsState.loading && (
            <List>
              {productsState.products.map(product => (
                <ListItem key={product.id} href={`/products/${product.slag}`}>
                  {product.name}
                </ListItem>
              ))}
            </List>
          )}

          {productsState.loading && <p>Loading...</p>}
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
