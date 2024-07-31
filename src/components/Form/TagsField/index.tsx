import { Tag } from '@prisma/client'
import { Fragment, useId, useState } from 'react'

import { generateRandomId, noEmpty } from '~/utils'

import { sanitizeTagSlag } from '~/utils/sanitizeTagSlag'
import { Body, Container, Label, LabelWrapper, TagInput } from './styles'
import { TagPreview } from './TagPreview'
import { TagProps } from './types'
import { fieldNameSplit, resolveFieldName } from './utils'

type TagsFieldProps = {
  label?: string
  initialData?: Array<Tag | TagProps>
  onTagAdded?: (tagSlag: string) => void
  onTagRemoved?: (tagSlag: string) => void
  onTagUpdated?: (newTagSlag: string, oldTagSlag: string) => void
}

type TagsFieldComponent = React.FunctionComponent<
  React.InputHTMLAttributes<HTMLInputElement> & TagsFieldProps
>

export const TagsField: TagsFieldComponent = ({
  label,
  initialData,
  ...props
}) => {
  const initialTags = initialData instanceof Array ? initialData : []

  const [tags, setTags] = useState<Array<TagProps>>(initialTags)
  const [deletedTags, setDeletedTags] = useState<Array<TagProps>>([])

  const fieldId = useId()

  const labelText = noEmpty(label) ? label : 'Tags'

  const inputKeyUpHandler: React.KeyboardEventHandler = event => {
    const pressedKey = event.key.toLowerCase()

    if (event.ctrlKey && pressedKey === 'v') {
      const inputElement = event.target as HTMLInputElement
      const inputElementValue = inputElement.value
        .split(',')
        .filter(tagSlag => noEmpty(tagSlag))
        .map(tagSlag => tagSlag.trim())
        .map(tagSlag => ({
          id: generateRandomId(),
          slag: sanitizeTagSlag(tagSlag)
        }))

      setTags([...tags, ...inputElementValue])

      inputElement.value = ''
    }
  }

  const inputKeyDownHandler: React.KeyboardEventHandler = event => {
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

    if (initialTags.some(({ id }) => deletedTag.id === id)) {
      setDeletedTags([...deletedTags, deletedTag])
    }
  }

  const [fieldNameHead, fieldNameTail] = fieldNameSplit(props.name || 'slag')

  const fieldName = resolveFieldName(
    `${fieldNameHead}[deleted]${fieldNameTail}`
  )

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
              onKeyDown={inputKeyDownHandler}
              onKeyUp={inputKeyUpHandler}
            />
          </li>
        </ul>
      </Body>
      <Fragment>
        {deletedTags.map(deletedTag => (
          <input
            key={deletedTag.id}
            type="hidden"
            name={`${fieldName}`}
            value={deletedTag.slag}
          />
        ))}
      </Fragment>
    </Container>
  )
}
