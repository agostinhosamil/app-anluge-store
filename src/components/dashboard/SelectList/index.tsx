import { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa6'

import { FlatList } from '@components/FlatList'
import { noEmpty, strMatches } from '~/utils'
import {
  Body,
  Button,
  Container,
  Header,
  List,
  SearchInputContainer
} from './styles'

type SelectListProps<ListDataType = any> = {
  data: Array<ListDataType>
  map: (data: Array<ListDataType>) => Array<SelectListItemProps>
  loading?: boolean
  onSelect?: (selectedItem: ListDataType) => void | Promise<void>
  onLoadEnd?: () => void
}

type SelectListItemProps<ListDataType = any> = {
  id: string | number
  title: string
  subTitle?: string
  data: ListDataType
}

// type SelectListComponent = React.FunctionComponent<SelectListProps>

export function SelectList<ListDataType = any>(
  props: SelectListProps<ListDataType>
) {
  const [query, setQuery] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(
    typeof props.loading === 'boolean' ? props.loading : false
  )

  useEffect(() => {
    if (typeof props.loading === 'boolean') {
      if (!props.loading && typeof props.onLoadEnd === 'function') {
        props.onLoadEnd()
      }

      setLoading(props.loading)
    }
  }, [props, props.loading, props.onLoadEnd])

  const { data, map } = props

  // const { users, loading } = useUser()

  const inputChangeHandler: React.ChangeEventHandler = event => {
    const inputElement = event.target as HTMLInputElement

    setQuery(inputElement.value)
  }

  const listFilter = (listItem: SelectListItemProps) => {
    if (!noEmpty(query)) {
      return true
    }

    return Boolean(
      strMatches(listItem.title, query) ||
        strMatches(listItem.subTitle || '', query)
      // listItem.title.includes(query) || listItem.subTitle?.includes(query)
    )
  }

  const listData = map(data)

  return (
    <Container>
      <Header>
        <SearchInputContainer>
          <i>
            <FaSearch />
          </i>
          <div>
            <input value={query} onChange={inputChangeHandler} />
          </div>
        </SearchInputContainer>
      </Header>
      <Body>
        <List>
          <FlatList
            data={listData.filter(listFilter)}
            loading={loading}
            paginationStyle="client-demand"
            itemsCountPerIteration={20}
            showSearchBox={false}
            renderItem={listItem => {
              const buttonClickHandler: React.MouseEventHandler = event => {
                event.preventDefault()

                if (typeof props.onSelect === 'function') {
                  props.onSelect(listItem.data)
                }
              }

              return (
                <Button
                  key={listItem.id}
                  type="button"
                  onClick={buttonClickHandler}
                >
                  <div>
                    <strong>{listItem.title}</strong>
                  </div>
                  {noEmpty(listItem.subTitle) && (
                    <div>
                      <span>{listItem.subTitle}</span>
                    </div>
                  )}
                  <i>
                    <FaAngleRight />
                  </i>
                </Button>
              )
            }}
          />
          {/* {(loading && <Spinner />) ||
            listData.filter(listFilter).map((listItem, listItemIndex) => {
              const buttonClickHandler: React.MouseEventHandler = event => {
                event.preventDefault()

                if (typeof props.onSelect === 'function') {
                  props.onSelect(data[listItemIndex])
                }
              }

              return (
                <button
                  key={listItem.id}
                  type="button"
                  onClick={buttonClickHandler}
                >
                  <div>
                    <strong>{listItem.title}</strong>
                  </div>
                  {noEmpty(listItem.subTitle) && (
                    <div>
                      <span>{listItem.subTitle}</span>
                    </div>
                  )}
                  <i>
                    <FaAngleRight />
                  </i>
                </button>
              )
            })} */}
        </List>
      </Body>
    </Container>
  )
}
