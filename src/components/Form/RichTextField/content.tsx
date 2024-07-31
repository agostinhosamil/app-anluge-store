import { EditorContent } from '@tiptap/react'
import { Fragment, useEffect, useRef } from 'react'

import { useRichTextFieldContext } from './hooks'
import { MenuBar } from './MenuBar'
import { Container, EditorBody, FixedContainer } from './styles'
import { TipTapBubbleMenu } from './TipTapBubbleMenu'
import { TipTapFloatingMenu } from './TipTapFloatingMenu'

type RichTextFieldContentProps = any

type RichTextFieldContentComponent =
  React.FunctionComponent<RichTextFieldContentProps>

export const RichTextFieldContent: RichTextFieldContentComponent = () => {
  const editorContentRef = useRef<HTMLDivElement>(null)

  const { editor, fixed, setEditorWidth } = useRichTextFieldContext()

  const ContainerElement = fixed ? FixedContainer : Container

  useEffect(() => {
    if (!editorContentRef.current) {
      return
    }

    const editorContentResizeObserver = new window.ResizeObserver(() => {
      if (!editorContentRef.current) {
        return
      }

      const { width } = editorContentRef.current.getBoundingClientRect()

      setEditorWidth(width)
    })

    editorContentResizeObserver.observe(editorContentRef.current)

    return () => {
      editorContentResizeObserver.disconnect()
    }
  })

  return (
    <Fragment>
      <ContainerElement>
        <MenuBar editor={editor} />
        <span>Some data: {editor?.getAttributes('textStyle').fontSize}</span>
        <EditorBody className="prose relative w-full">
          <TipTapBubbleMenu />
          <TipTapFloatingMenu />
          <EditorContent ref={editorContentRef} editor={editor} />
        </EditorBody>
      </ContainerElement>
    </Fragment>
  )
}
