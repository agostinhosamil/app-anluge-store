import { Fragment, useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { FaSearch } from 'react-icons/fa'

import { range } from '~/utils'
import {
  Body,
  Container,
  Footer,
  Head,
  List,
  SearchInputContainer,
  SpinnerWrapper
} from './styles'

export type FlatListItemElement = 'entity-card'
export type FlatListPaginationStyle =
  | 'standard'
  | 'infinite-scroll'
  | 'client-demand'

export type FlatListProps<Data = any> = {
  data: Array<Data>
  loading?: boolean
  placeholderCountOnLoading?: number
  paginationStyle?: FlatListPaginationStyle
  renderItem?: (data: Data) => React.ReactNode
  renderItemPlaceholder?: () => React.ReactNode
  // listItemElement?: FlatListItemElement
}

export function FlatList<Data = any>(
  props: FlatListProps<Data>
): React.ReactNode {
  const [data, setData] = useState<Array<Data>>(props.data)

  useEffect(() => {
    setData(props.data)
  }, [props.data])

  const renderItemPlaceholders = () => {
    return range(placeholderCountOnLoading).map(listItemData => (
      <Fragment key={listItemData}>
        {props.renderItemPlaceholder && props.renderItemPlaceholder()}
      </Fragment>
    ))
  }

  const listItemDataFilter = (data: Data): boolean => {
    return true
  }

  const defaultPlaceholderCountOnLoading = 30
  const placeholderCountOnLoading =
    props.placeholderCountOnLoading || defaultPlaceholderCountOnLoading
  const isLoading = Boolean(typeof props.loading === 'boolean' && props.loading)

  const PaginationElement = () => {
    switch (props.paginationStyle) {
      case 'client-demand':
        return <div></div>
    }
  }

  return (
    <Container>
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
      <Body>
        <List>
          {!isLoading &&
            data
              .slice(0, 30)
              .filter(listItemDataFilter)
              .map(
                (listItemData, listItemDataIndex) =>
                  props.renderItem && (
                    <Fragment key={listItemDataIndex}>
                      {props.renderItem(listItemData)}
                    </Fragment>
                  )
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
