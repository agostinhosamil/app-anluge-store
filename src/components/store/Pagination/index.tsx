import { Fragment } from 'react'

type PaginationProps = {
  style?: 'infinite-scroll' | 'links' | 'button'
}

type PaginationComponent = React.FunctionComponent<PaginationProps>

export const Pagination: PaginationComponent = () => {
  return <Fragment />
}
