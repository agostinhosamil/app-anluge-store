import { Fragment, useState } from 'react'
import { FaX } from 'react-icons/fa6'

import { noEmpty } from '~/utils'
import { sanitizeTagSlag } from '~/utils/sanitizeTagSlag'

import { TagProps } from './types'
import { resolveFieldName } from './utils'

type TagPreviewProps = TagProps & {
  name?: string
  onDelete?: (tagProps: TagProps) => void
  onUpdate?: (newTagProps: TagProps, oldTagProps: TagProps) => void
}

type TagPreviewComponent = React.FunctionComponent<TagPreviewProps>

export const TagPreview: TagPreviewComponent = props => {
  const [editing, setEditing] = useState<boolean>(false)
  const [slag, setSlag] = useState<string>(props.slag)

  const inputRef = (inputElement: HTMLInputElement | null) => {
    if (inputElement) {
      inputElement.focus()
    }
  }

  const spanDoubleClickHandler = () => {
    setEditing(true)
  }

  const inputKeyDownHandler: React.KeyboardEventHandler = event => {
    if (event.key === 'Enter') {
      event.preventDefault()

      const oldSlag = slag
      const inputElement = event.target as HTMLInputElement

      if (typeof props.onUpdate === 'function') {
        props.onUpdate(props, { ...props, slag: oldSlag })
      }

      setSlag(sanitizeTagSlag(inputElement.value))
      setEditing(false)
    }
  }

  const inputBlurHandler = () => {
    setEditing(false)
  }

  const deleteButtonClickHandler = () => {
    if (typeof props.onDelete === 'function') {
      props.onDelete(props)
    }
  }

  const fieldName = resolveFieldName(noEmpty(props.name) ? props.name : 'tags')

  return (
    <li>
      <span onDoubleClick={spanDoubleClickHandler}>
        <input type="hidden" readOnly={true} name={fieldName} value={slag} />
        {(editing && (
          <input
            ref={inputRef}
            type="text"
            defaultValue={slag}
            onKeyDown={inputKeyDownHandler}
            onBlur={inputBlurHandler}
          />
        )) || (
          <Fragment>
            {slag}
            <button type="button" onClick={deleteButtonClickHandler}>
              <FaX />
            </button>
          </Fragment>
        )}
      </span>
    </li>
  )
}
