'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaEllipsis } from 'react-icons/fa6'

import Image from '@components/Image'
import { range } from '~/utils'

import { OptionsButton } from './buttons/Options'
import { ShareButton } from './buttons/Share'
import { PostAuthorAvatar } from './PostAuthorAvatar'
import { Post } from './types'

type PostPreviewProps = object | Post

type PostPreviewComponent = React.FunctionComponent<PostPreviewProps>

export const PostPreview: PostPreviewComponent = post => {
  const [colapseTags, setColapseTags] = useState<boolean>(true)

  if (!('id' in post)) {
    return <div>Loading</div>
  }

  const colapseTagsButtonClickHandler = () => {
    setColapseTags(colapseTags => !colapseTags)
  }

  return (
    <div key={post.id} className="w-full flex flex-col gap-3 mb-5 last:mb-0">
      <div className="w-full min-h-20 bg-zinc-300 dark:bg-zinc-800 rounded-2xl">
        <Image
          src="http://localhost/anluge-cdn/static/images/1000000041438172319676446110420240809/1000331631557021911941723713959486443338895048@large"
          className="w-full rounded-2xl shadow-xl transition-all sm:max-h-40 md:max-h-52 lg:max-h-64 object-cover"
        />
      </div>
      <div className="w-full flex flex-row items-center">
        <h2 className="dark:text-zinc-50 dark:font-extrabold md:text-4xl inline-flex w-full">
          <Link
            href="#"
            className="hover:text-zinc-950 text-inherit dark:hover:text-zinc-50 hover:underline"
          >
            {post.title}
          </Link>
        </h2>
        <ul className="inline-flex flex-row items-center justify-end gap-3">
          <li className="rounded-full size-9 bg-zinc-400 dark:bg-zinc-700">
            <PostAuthorAvatar post={post} />
          </li>
          <li className="rounded-full size-9 bg-zinc-400 dark:bg-zinc-700">
            <ShareButton post={post} />
          </li>
          <li className="rounded-full size-9 bg-zinc-400 dark:bg-zinc-700">
            <OptionsButton post={post} />
          </li>
        </ul>
      </div>
      <div className="w-full block">
        <Link
          href={''}
          className="block w-full hover:text-zinc-700 hover:underline dark:hover:text-zinc-50"
        >
          <p className="line-clamp-4 text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-50">
            {post.description}
          </p>
        </Link>
      </div>
      <div className="w-full flex flex-row">
        <span className="inline-flex pr-3 mr-3 border-solid border-l-0 border-y-0 border-r-[1px] text-zinc-500 dark:text-zinc-400 border-r-zinc-300 dark:border-r-zinc-800">
          Publicado há dois dias
        </span>
        <ol className="flex flex-row flex-wrap gap-2 items-center">
          {range(23)
            .slice(0, colapseTags ? 3 : undefined)
            .map(j => (
              <li key={j}>
                <Link
                  href={''}
                  className="py-2 px-4 text-xs inline-flex rounded-full text-zinc-700 bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-400 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:active:bg-zinc-600d dark:text-zinc-200 text-nowrap"
                >
                  Post {post.id} Tag {j} slag
                </Link>
              </li>
            ))}
          <li>
            <button
              type="button"
              className="outline-none border-0 py-2 px-4 text-xs rounded-full text-zinc-700 bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-400 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:active:bg-zinc-600d dark:text-zinc-200 text-nowrap"
              onClick={colapseTagsButtonClickHandler}
            >
              <FaEllipsis />
            </button>
          </li>
        </ol>
      </div>
    </div>
  )
}
