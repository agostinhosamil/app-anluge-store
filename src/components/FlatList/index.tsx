import { Fragment, useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { FaSearch } from 'react-icons/fa'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { range } from '~/utils'
import { EmptyListContainer } from '../dashboard/styles'
import {
  Body,
  Container,
  Footer,
  Head,
  List,
  ListLoaderButton,
  ListLoaderButtonWrapper,
  ListPaginationButton,
  ListPaginationButtonsList,
  ListPaginationButtonsListItem,
  SearchInputContainer,
  SpinnerWrapper
} from './styles'

export type FlatListItemElement = 'entity-card'
export type FlatListPaginationStyle =
  | 'standard'
  | 'infinite-scroll'
  | 'client-demand'

export type FlatListProps<Data = any> = React.PropsWithChildren & {
  data: Array<Data>
  loading?: boolean
  placeholderCountOnLoading?: number
  itemsCountPerIteration?: number
  paginationStyle?: FlatListPaginationStyle
  renderItem?: (data: Data) => React.ReactNode
  renderItemPlaceholder?: () => React.ReactNode
  showSearchBox?: boolean
  // listItemElement?: FlatListItemElement
}

export function FlatList<Data = any>(
  props: FlatListProps<Data>
): React.ReactNode {
  const [listCursor, setListCursor] = useState<number>(0)
  const [data, setData] = useState<Array<Data>>(props.data)

  const showSearchBox =
    typeof props.showSearchBox === 'boolean' ? props.showSearchBox : true

  useEffect(() => {
    setData(props.data)
  }, [props.data])

  useEffect(() => {
    const windowScrollHandler = () => {
      if (props.paginationStyle !== 'infinite-scroll') {
        return
      }

      // const listElement = listRef.current
      // const listElementLastItem =
      //   listElement.childNodes[-1 + listElement.childNodes.length]

      // if (listElementLastItem instanceof HTMLElement) {
      // console.log({
      //   'window.scrollY': window.scrollY,
      //   'listElementLastItemCoordinates.yh': listElementLastItemCoordinates.yh
      // })
      // }
      if (
        Math.ceil(window.scrollY + window.innerHeight) >=
        document.body.scrollHeight
      ) {
        setListCursor(listCursor + itemsCountPerIteration)
      }
    }

    window.addEventListener('scroll', windowScrollHandler)

    return () => {
      window.removeEventListener('scroll', windowScrollHandler)
    }
  })

  const renderItemPlaceholders = () => {
    return range(placeholderCountOnLoading).map(listItemData => (
      <Fragment key={listItemData}>
        {(typeof props.renderItemPlaceholder === 'function' &&
          props.renderItemPlaceholder()) || <Spinner />}
      </Fragment>
    ))
  }

  const listItemDataFilter = (): boolean => {
    return true
  }

  const listLoaderButtonClickHandler = () => {
    if (listCursor < props.data.length) {
      setListCursor(listCursor + itemsCountPerIteration)
    }
  }

  const paginationNextButtonClickHandler = () => {
    listLoaderButtonClickHandler()
  }

  const paginationHomeButtonClickHandler = () => {
    setListCursor(0)
  }

  const paginationPrevButtonClickHandler = () => {
    if (listCursor > 0) {
      setListCursor(listCursor - itemsCountPerIteration)
    }
  }

  const resolveCurrentPaginationIteration = () => {
    return 1 + listCursor / itemsCountPerIteration
  }

  const defaultItemsCountPerIteration = 30
  const defaultPlaceholderCountOnLoading = 30
  const placeholderCountOnLoading =
    props.placeholderCountOnLoading || defaultPlaceholderCountOnLoading
  const itemsCountPerIteration =
    props.itemsCountPerIteration || defaultItemsCountPerIteration
  const isLoading = Boolean(typeof props.loading === 'boolean' && props.loading)

  const paginationStyle = props.paginationStyle || 'standard'

  const PaginationElement = () => {
    const maxPaginationButtons = 7
    const paginationButtonsCountDivisor =
      itemsCountPerIteration >= 1 ? itemsCountPerIteration : 1
    const paginationButtonsCount = Math.ceil(
      props.data.length / paginationButtonsCountDivisor
    )

    const finalPaginationButtonsCount =
      paginationButtonsCount >= maxPaginationButtons
        ? maxPaginationButtons
        : paginationButtonsCount

    const paginationButtonsCountPerSide = Math.floor(
      finalPaginationButtonsCount / 2
    )

    const currentPaginationIteration = resolveCurrentPaginationIteration()

    const paginationButtonsSliceStart =
      currentPaginationIteration >= paginationButtonsCountPerSide + 1
        ? currentPaginationIteration - (paginationButtonsCountPerSide + 1)
        : 0
    const paginationButtonsSliceEnd =
      currentPaginationIteration +
      paginationButtonsCountPerSide * (currentPaginationIteration <= 1 ? 2 : 1)

    switch (paginationStyle) {
      case 'client-demand':
        return (
          listCursor < props.data.length && (
            <ListLoaderButtonWrapper>
              <ListLoaderButton
                type="button"
                onClick={listLoaderButtonClickHandler}
              >
                Ver mais
              </ListLoaderButton>
            </ListLoaderButtonWrapper>
          )
        )

      case 'standard':
        return (
          <ListPaginationButtonsList>
            <ListPaginationButtonsListItem>
              <ListPaginationButton
                onClick={paginationHomeButtonClickHandler}
                disabled={listCursor <= 0}
              >
                <span>Início</span>
              </ListPaginationButton>
            </ListPaginationButtonsListItem>
            <ListPaginationButtonsListItem>
              <ListPaginationButton
                onClick={paginationPrevButtonClickHandler}
                disabled={listCursor <= 0}
              >
                <FaAngleLeft />
              </ListPaginationButton>
            </ListPaginationButtonsListItem>
            {range(paginationButtonsCount)
              .slice(paginationButtonsSliceStart, paginationButtonsSliceEnd)
              .map(i => (
                <ListPaginationButtonsListItem key={i}>
                  <ListPaginationButton
                    onClick={() => {
                      setListCursor(itemsCountPerIteration * (i - 1))
                    }}
                    $selected={currentPaginationIteration === i}
                  >
                    <span>{i}</span>
                  </ListPaginationButton>
                </ListPaginationButtonsListItem>
              ))}
            <ListPaginationButtonsListItem>
              <ListPaginationButton
                onClick={paginationNextButtonClickHandler}
                disabled={listCursor >= props.data.length}
              >
                <FaAngleRight />
              </ListPaginationButton>
            </ListPaginationButtonsListItem>
            <ListPaginationButtonsListItem>
              <ListPaginationButton
                onClick={() =>
                  setListCursor(paginationButtonsCount * itemsCountPerIteration)
                }
                disabled={listCursor >= props.data.length}
              >
                <span>Fim</span>
              </ListPaginationButton>
            </ListPaginationButtonsListItem>
          </ListPaginationButtonsList>
        )
    }
  }

  return (
    <Container>
      {typeof showSearchBox === 'boolean' && showSearchBox && (
        <Head>
          <SearchInputContainer>
            <div>
              <i>
                <FaSearch />
              </i>
              <input type="text" autoComplete="off" spellCheck={false} />
            </div>
          </SearchInputContainer>
        </Head>
      )}
      <Body>
        <List>
          {!isLoading &&
            data
              .slice(0, itemsCountPerIteration + listCursor)
              .filter(listItemDataFilter)
              .map(
                (listItemData, listItemDataIndex) =>
                  props.renderItem && (
                    <Fragment key={listItemDataIndex}>
                      {props.renderItem(listItemData)}
                    </Fragment>
                  )
              )}

          {!isLoading && data.length < 1 && (
            <EmptyListContainer>
              {props.children || (
                <EmptyListContainer>
                  <h1>Sem registros para apresentar</h1>
                  <h2>
                    Experimente adicionar registro para visualizar por aqui...
                  </h2>
                </EmptyListContainer>
              )}
            </EmptyListContainer>
          )}

          {isLoading &&
            ((props.renderItemPlaceholder && renderItemPlaceholders()) || (
              <SpinnerWrapper>
                <Spinner />
              </SpinnerWrapper>
            ))}
        </List>
      </Body>
      <Footer>
        <PaginationElement />
      </Footer>
    </Container>
  )
}
