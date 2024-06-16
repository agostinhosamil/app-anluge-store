import { Fragment } from 'react'
import { renderRichTextContent } from '~/utils/renderRichTextContent'

export type RichTextProps = {
  content?: string | Array<string>
}

export type RichTextComponent = React.FunctionComponent<
  React.PropsWithChildren & RichTextProps
>

export const RichText: RichTextComponent = ({ content, ...props }) => {
  const richTextContent = content instanceof Array ? content : [content]
  const children =
    props.children instanceof Array
      ? [...props.children, ...richTextContent]
      : [props.children, ...richTextContent]

  return (
    <Fragment>
      {children
        .filter(child => Boolean(child))
        .map((child, index) => {
          if (typeof child === 'string') {
            return (
              <Fragment key={index}>{renderRichTextContent(child)}</Fragment>
            )
          }

          return <Fragment key={index}>{child}</Fragment>
        })}
    </Fragment>
  )
}
