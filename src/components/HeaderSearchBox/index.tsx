'use client'

import { Fragment, useRef, useState } from 'react'
import { FaSistrix } from 'react-icons/fa6'

import { ProductProps } from '~/Types/Product'
import { empty, noEmpty } from '~/utils'
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

  const productsState = useProduct()

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

  const strMatches = (str1: string, str2: string): boolean => {
    return str1.toLowerCase().includes(str2.toLowerCase())
  }

  const productsFilterByQuery = (product: ProductProps) => {
    if (empty(query) || !query) {
      return false
    }

    return Boolean(
      strMatches(product.name, query) ||
        strMatches(product.description, query) ||
        strMatches(String(product.summary), query)
    )
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
        className="dark:text-zinc-50"
      />
    </Fragment>
  )

  if (fixed) {
    const filteredProductList = productsState.products.filter(
      productsFilterByQuery
    )

    return (
      <ExpandedContainerWrapper
        onMouseEnter={expandedContainerWrapperMouseEnterHandler}
        onMouseLeave={expandedContainerWrapperMouseLeaveHandler}
      >
        <ExpandedContainer>
          <SearchBoxBody />
        </ExpandedContainer>
        {noEmpty(query) && filteredProductList.length >= 1 && (
          <SearchBoxContent
            ref={searchBoxContentRef}
            $height={searchBoxContentHeightState.current}
          >
            {!productsState.loading && (
              <List>
                {filteredProductList.map(product => (
                  <ListItem key={product.id} href={`/products/${product.slag}`}>
                    {product.name}
                  </ListItem>
                ))}
              </List>
            )}

            {productsState.loading && <p>Loading...</p>}
          </SearchBoxContent>
        )}
      </ExpandedContainerWrapper>
    )
  }

  return (
    <Container className="bg-white dark:!bg-zinc-900 border-solid border-[1px] border-zinc-300 dark:border-zinc-800">
      <SearchBoxBody />
    </Container>
  )
}
