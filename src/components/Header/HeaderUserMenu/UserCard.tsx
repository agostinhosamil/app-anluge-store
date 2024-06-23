import Image from 'next/image'
import Link from 'next/link'

import { Icon } from '@components/Icon'
import { UserProps } from 'Types/UserProps'

import { resolveUserAvatarUrl } from '~/utils'
import {
  UserCardButtons,
  UserCardContainer,
  UserCardImageContainer
} from './styles'

type UserCardProps = {
  user: UserProps
}

type UserCardComponent = React.FunctionComponent<UserCardProps>

export const UserCard: UserCardComponent = ({ user }) => {
  return (
    <UserCardContainer>
      <UserCardImageContainer>
        <div>
          <Image
            src={resolveUserAvatarUrl(user.image)}
            alt="User name"
            width={110}
            height={110}
          />
        </div>
      </UserCardImageContainer>
      <h3>{user.name}</h3>
      <h5>{user.email}</h5>
      <UserCardButtons>
        <div>
          <Link href="/me/cart">
            <i>
              <Icon name="FaCartShopping" />
            </i>
          </Link>
        </div>
        <div>
          <Link href="/me/favorites">
            <i>
              <Icon name="FaHeart" />
            </i>
          </Link>
        </div>
        <div>
          <button type="button" role="button">
            <i>
              <Icon name="FaPen" />
            </i>
          </button>
        </div>
      </UserCardButtons>
    </UserCardContainer>
  )
}
