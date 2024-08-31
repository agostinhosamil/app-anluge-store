import React, { Fragment, useEffect, useState } from 'react'

import { Icon } from '@components/Icon'
import Image from '~/components/Image'
import { uploadedImageUrl } from '~/utils'
import { PostListItem } from './types'

type PostPreviewProps = PostListItem

type PostPreviewComponent = React.FunctionComponent<PostPreviewProps>

type FixedPostPreviewWrapperProps = {
  onClose?: () => any
}

type FixedPostPreviewWrapperComponent = React.FunctionComponent<
  React.PropsWithChildren & FixedPostPreviewWrapperProps
>

const FixedPostPreviewWrapper: FixedPostPreviewWrapperComponent = props => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  })

  const closeButtonClickHandler = () => {
    if (typeof props.onClose === 'function') {
      props.onClose()
    }
  }

  return (
    <div className="size-full py-14 overflow-y-auto flex flex-col items-center fixed z-50 bg-zinc-50 dark:bg-zinc-950 top-0 left-0">
      <div className="fixed right-9 top-5">
        <button
          type="button"
          className="outline-none border-0 bg-zinc-600 text-white rounded-full hover:bg-zinc-700 active:bg-zinc-800 size-10 flex flex-row items-center justify-center"
          onClick={closeButtonClickHandler}
        >
          <Icon name="FaX" />
        </button>
      </div>
      <div className="w-full max-w-3xl">{props.children}</div>
    </div>
  )
}

export const PostPreview: PostPreviewComponent = props => {
  const [expanded, setExpanded] = useState<boolean>(false)

  const expandDialogButtonClickHandler = () => {
    setExpanded(!expanded)
  }

  const WrapperElement = !expanded
    ? Fragment
    : (props: React.PropsWithChildren) => (
        <FixedPostPreviewWrapper
          onClose={expandDialogButtonClickHandler}
          {...props}
        />
      )

  const resolveClassName = (className: string) =>
    className.concat(expanded ? ' expanded' : '')

  const [postMedia] = props.medias

  const postImageFileName = postMedia.fileName

  return (
    <WrapperElement>
      <article className="blog-post">
        <div className={resolveClassName('blog-post-content-wrapper')}>
          <div className={resolveClassName('image-wrapper')}>
            <Image
              src={uploadedImageUrl(postImageFileName, 'large')}
              alt="Post title"
            />
          </div>
          <div className={resolveClassName('post-data')}>
            <i>Há dois dias</i>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <div className="w-full flex flex-row gap-3">
              <a href="#">Ler mais</a>
              <button
                type="button"
                role="button"
                onClick={expandDialogButtonClickHandler}
              >
                <span className="flex p-2 text-lg text-zinc-900">
                  <Icon name="FaEye" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </WrapperElement>
  )
}
