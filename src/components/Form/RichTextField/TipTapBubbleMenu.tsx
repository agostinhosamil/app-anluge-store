import { BubbleMenu } from '@tiptap/react'

import { useRichTextFieldContext } from './hooks'

export const TipTapBubbleMenu = () => {
  const { editor } = useRichTextFieldContext()

  if (!editor) {
    return null
  }

  return (
    <BubbleMenu editor={editor}>
      <button>Hey</button>
    </BubbleMenu>
  )
}
