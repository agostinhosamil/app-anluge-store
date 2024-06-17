import { Editor } from '@tiptap/react'

export type RichTextFieldContextProps = {
  fieldName?: string
  fieldDefaultValue?: string
  editor: Editor | null
  editorWidth: number
  fixed: boolean

  toggleFixed: () => boolean

  getEditorWidth: () => number
  setEditorWidth: (editorWidth: number) => void
}
