import { useId, useState } from 'react'

import { generateRandomId, noEmpty } from '~/utils'

import { sanitizeTagSlag } from '~/utils/sanitizeTagSlag'
import { Body, Container, Label, LabelWrapper, TagInput } from './styles'
import { TagPreview } from './TagPreview'
import { TagProps } from './types'

type TagsFieldProps = {
  label?: string
  onTagAdded?: (tagSlag: string) => void
  onTagRemoved?: (tagSlag: string) => void
  onTagUpdated?: (newTagSlag: string, oldTagSlag: string) => void
}

type TagsFieldComponent = React.FunctionComponent<
  React.InputHTMLAttributes<HTMLInputElement> & TagsFieldProps
>

export const TagsField: TagsFieldComponent = ({ label, ...props }) => {
  const [tags, setTags] = useState<Array<TagProps>>([])

  const fieldId = useId()

  const labelText = noEmpty(label) ? label : 'Tags'

  const inputKeyUpHandler: React.KeyboardEventHandler = event => {
    const tagListSeparatorKeys = [',', ';', 'enter']
    const pressedKey = event.key.toLowerCase()

    if (tagListSeparatorKeys.indexOf(pressedKey) >= 0) {
      event.preventDefault()

      const inputElement = event.target as HTMLInputElement

      setTags([
        ...tags,
        {
          id: generateRandomId(),
          slag: sanitizeTagSlag(inputElement.value)
        }
      ])

      inputElement.value = ''
    }
  }

  const tagDeleteHandler = (deletedTag: TagProps) => {
    setTags(tags.filter(currentTag => currentTag.id !== deletedTag.id))
  }

  return (
    <Container htmlFor={fieldId}>
      <LabelWrapper>
        <Label>{labelText}</Label>
      </LabelWrapper>
      <Body>
        <ul>
          {tags.map(tag => {
            return (
              <TagPreview
                key={tag.id}
                id={tag.id}
                slag={tag.slag}
                name={props.name}
                onDelete={tagDeleteHandler}
              />
            )
          })}
          <li>
            <TagInput
              {...props}
              name={undefined}
              id={fieldId}
              type="text"
              autoCapitalize="off"
              autoComplete="off"
              spellCheck={false}
              onKeyDown={inputKeyUpHandler}
            />
          </li>
        </ul>
      </Body>
    </Container>
  )
}
