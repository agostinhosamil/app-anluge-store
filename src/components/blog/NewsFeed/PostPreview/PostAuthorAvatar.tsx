import { CalendarIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Fragment } from 'react'

import Image from '@components/Image'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from 'ui@components/hover-card'
import { uploadedImageUrl } from '~/utils'

import { Post } from './types'

type PostAuthorAvatarProps = {
  post: Post
}

type PostAuthorAvatarComponent = React.FunctionComponent<PostAuthorAvatarProps>

export const PostAuthorAvatar: PostAuthorAvatarComponent = () => {
  return (
    <Fragment>
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="rounded-full size-9 bg-zinc-400 dark:bg-zinc-700">
            <Image
              src={uploadedImageUrl('user-avatar-placeholder.jpg')}
              className="rounded-full size-9 bg-zinc-400 dark:bg-zinc-700"
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-50 dark:!border-zinc-700">
          <div className="flex justify-between space-x-4">
            <Image
              src={uploadedImageUrl('user-avatar-placeholder.jpg')}
              className="size-12 rounded-full bg-zinc-400 dark:bg-zinc-700"
            />
            <div className="space-y-1">
              <Link href="#" className="text-inherit">
                <h4 className="text-sm font-semibold">Agostinho Lopes</h4>
              </Link>
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="flex items-center pt-2">
                <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
                <span className="text-xs text-muted-foreground">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </Fragment>
  )
}
