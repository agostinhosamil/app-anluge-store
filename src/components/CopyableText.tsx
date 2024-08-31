'use client'

import { Fragment, isValidElement } from 'react'
import { FaCopy } from 'react-icons/fa6'
import { generateRandomId } from '~/utils'

type CopyableTextProps = {
  asChild?: boolean
}

type CopyableTextComponent = React.FunctionComponent<
  React.PropsWithChildren<CopyableTextProps>
>

export const CopyableText: CopyableTextComponent = props => {
  const copyButtonClickHandler: React.MouseEventHandler = function (event) {
    const buttonElement = event.target as HTMLButtonElement
    const parentElement = buttonElement.parentNode

    console.log('event data => ', event)

    const shouldCopyText = Boolean(
      navigator.clipboard && typeof navigator.clipboard.writeText === 'function'
    )

    if (parentElement instanceof HTMLElement && shouldCopyText) {
      navigator.clipboard.writeText(parentElement.innerText)
    }
  }

  const copyButtonElement = (
    <button
      className="text-zinc-700 dark:text-zinc-300 ml-1 cursor-pointer hover:opacity-95 hover:scale-105 inline-flex bg-transparent outline-none border-0"
      onClick={copyButtonClickHandler}
      title="Copiar informação"
      type="button"
      role="button"
      key={generateRandomId()}
    >
      <FaCopy className="pointer-events-none" />
    </button>
  )

  const children =
    props.children instanceof Array ? props.children : [props.children]

  return (
    <Fragment>
      {children.slice(0, 1).map((child, childIndex) => {
        if (isValidElement(child)) {
          const childProps = (child.props as React.PropsWithChildren) ?? {
            children: []
          }

          const childChildren =
            'children' in childProps && childProps.children instanceof Array
              ? childProps.children
              : [childProps.children]

          return {
            ...child,
            props: {
              ...childProps,
              key: childIndex,
              children: [...childChildren, copyButtonElement]
            }
          }
        }

        return (
          <Fragment key={childIndex}>
            {child} {copyButtonElement}
          </Fragment>
        )
      })}
    </Fragment>
  )
}
