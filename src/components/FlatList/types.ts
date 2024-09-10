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
  title?: string
  // listItemElement?: FlatListItemElement
}
