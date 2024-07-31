import { FloatingMenu } from '@tiptap/react'
import { useRichTextFieldContext } from './hooks'

export const TipTapFloatingMenu = () => {
  const { editor } = useRichTextFieldContext()

  if (!editor) {
    return null
  }

  return (
    <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <div>
        <button>Hey: FloatingMenu here</button>
      </div>
    </FloatingMenu>
  )
}
