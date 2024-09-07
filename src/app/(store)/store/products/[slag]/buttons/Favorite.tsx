import { Spinner } from 'react-bootstrap'
import { FaHeart } from 'react-icons/fa6'

import { ActionButton } from 'store@styles/product-page'

type FavoriteProps = {
  loading?: boolean
  active?: boolean
}

type FavoriteComponent = React.FunctionComponent<FavoriteProps>

export const Favorite: FavoriteComponent = ({ active, loading, ...props }) => {
  return (
    <ActionButton
      {...props}
      type="button"
      role="button"
      $color={active ? 'red' : 'default'}
    >
      <i>{loading ? <Spinner size="sm" /> : <FaHeart />}</i>
    </ActionButton>
  )
}
