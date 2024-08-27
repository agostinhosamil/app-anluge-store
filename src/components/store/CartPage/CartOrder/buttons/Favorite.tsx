import { Spinner } from 'react-bootstrap'
import { FaHeart } from 'react-icons/fa6'

type FavoriteProps = {
  loading?: boolean
  active?: boolean
}

type FavoriteComponent = React.FunctionComponent<FavoriteProps>

export const Favorite: FavoriteComponent = ({ active, loading, ...props }) => {
  return (
    <button type="button" role="button" {...props}>
      <i>
        {(loading && <Spinner size="sm" />) || (
          <FaHeart color={active ? '#e41a1a' : 'currentColor'} />
        )}
      </i>
    </button>
  )
}
