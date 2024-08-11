import React, { Fragment, useEffect, useState } from 'react'

import { Icon } from '@components/Icon'

type PostPreviewProps = {
  id: string
  title: string
  summary: string
}

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
    <div className="size-full py-14 overflow-y-auto flex flex-col items-center fixed z-50 bg-opacity-85 bg-black top-0 left-0">
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

  return (
    <WrapperElement>
      <article className="blog-post">
        <div className={resolveClassName('blog-post-content-wrapper')}>
          <div className={resolveClassName('image-wrapper')}>
            <img
              src="/assets/partners/images/header-banner-000.jpg"
              alt="Post title"
            />
          </div>
          <div className={resolveClassName('post-data')}>
            <i>Há dois dias</i>
            <h3>{props.title}</h3>
            <p>{props.summary}</p>
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
