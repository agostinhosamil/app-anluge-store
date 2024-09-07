import { Image } from '@components/Image'
import { CartProps } from 'Types/Cart'
import { resolveUserAvatarUrl } from '~/utils'

type UserCardProps = {
  cart: CartProps
}

type UserCardComponent = React.FunctionComponent<UserCardProps>

export const UserCard: UserCardComponent = ({ cart }) => {
  return (
    <div className="w-full h-auto bg-gray-200 dark:bg-zinc-900 rounded-xl p-6 my-9">
      <div className="w-full h-auto flex flex-row items-center">
        <div className="size-16 mr-5">
          <Image
            width={60}
            height={60}
            alt={String(cart.user?.name)}
            src={resolveUserAvatarUrl(cart.user?.image)}
            className="border-0 outline-none rounded-full"
          />
        </div>
        <data className="w-full inline-flex flex-col [&_*]:pointer-events-none [&_*]:select-none">
          <strong className="text-2xl font-bold text-zinc-800 dark:text-zinc-50">
            {cart.user?.name}
          </strong>
          <span className="text-zinc-600 text-[14px] dark:text-zinc-300">
            {cart.user?.email}
          </span>
        </data>
      </div>
    </div>
  )
}
