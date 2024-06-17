'use client'

import TipTapColorExtension from '@tiptap/extension-color'
import TipTapDropCursorExtension from '@tiptap/extension-dropcursor'
import TipTapFloatingMenuExtension from '@tiptap/extension-floating-menu'
import TipTapImageExtension from '@tiptap/extension-image'
import TipTapTableExtension from '@tiptap/extension-table'
import TipTapTableCellExtension from '@tiptap/extension-table-cell'
import TipTapTableHeaderExtension from '@tiptap/extension-table-header'
import TipTapTableRowExtension from '@tiptap/extension-table-row'
import TipTapTaskItemExtension from '@tiptap/extension-task-item'
import TipTapTaskListExtension from '@tiptap/extension-task-list'
import TipTapTextExtension from '@tiptap/extension-text'
import TipTapTextAlignExtension from '@tiptap/extension-text-align'
import TipTapTextStyleExtension from '@tiptap/extension-text-style'
import TipTapUnderlineExtension from '@tiptap/extension-underline'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useState } from 'react'
import TipTapFontSizeExtension from 'tiptap-extension-font-size'

import { RichTextFieldContent } from './content'
import { RichTextFieldContextProvider } from './context'
import { RichTextFieldContextProps } from './types'

type RichTextFieldProps = {
  name?: string
  defaultValue?: string
}

type RichTextFieldComponent = React.FunctionComponent<RichTextFieldProps>

// const TipTapFontSizeGetterExtension = Extension.create({
//   name: 'getFontSize',
//   addOptions() {
//     return {
//       types: ['textStyle']
//     }
//   },
//   addGlobalAttributes() {
//     return [
//       {
//         types: [],
//         attributes: {}
//       }
//     ]
//   },
//   addCommands() {
//     return {
//       getFontSize: () => ({ chain }) => 0
//     }
//   },
// })

export const RichTextField: RichTextFieldComponent = ({
  name,
  defaultValue
}) => {
  const [fixed, setFixed] = useState<boolean>(false)
  const [editorWidth, setEditorWidth] = useState<number>(-1)

  // useEffect(() => {

  // }, [fixed])

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6]
        }
      }),
      TipTapTextAlignExtension.configure({
        types: ['heading', 'paragraph']
      }),
      TipTapColorExtension,
      TipTapTaskListExtension,
      TipTapTaskItemExtension,
      TipTapFontSizeExtension,
      TipTapUnderlineExtension,
      TipTapTextStyleExtension,
      TipTapFloatingMenuExtension,
      TipTapTableExtension.configure({
        resizable: true,
        allowTableNodeSelection: true
      }),
      TipTapTableRowExtension,
      TipTapTableCellExtension,
      TipTapTableHeaderExtension,
      TipTapImageExtension,
      TipTapDropCursorExtension,
      TipTapTextExtension
    ],
    content: '<p>Hello World! 🌎️</p>'
  })

  const richTextFieldContextData: RichTextFieldContextProps = {
    editor,
    fixed,
    editorWidth,

    fieldName: name,
    fieldDefaultValue: defaultValue,

    setEditorWidth(editorWidth) {
      setEditorWidth(editorWidth)
    },

    getEditorWidth() {
      return this.editorWidth
    },

    toggleFixed() {
      !fixed
        ? document.body.classList.add('overflow-y-hidden')
        : document.body.classList.remove('overflow-y-hidden')

      setFixed(!fixed)

      return !fixed
    }
  }

  return (
    <RichTextFieldContextProvider value={richTextFieldContextData}>
      <RichTextFieldContent />
    </RichTextFieldContextProvider>
  )
}
