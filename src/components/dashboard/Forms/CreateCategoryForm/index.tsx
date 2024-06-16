import { useState } from 'react'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'

import { DropZone } from '@components/DropZone'
import { FormGroup } from '@components/Form/FormGroup'
import { LongTextField } from '@components/Form/LongTextField'
import { FormSubmit } from 'dashboard@components/FormSubmit'
import { CategoryProps } from 'Types/Category'
import { AnlugeUploadClient } from '~/services/upload'

export type CreateCategoryOnFormSubmitProps = {
  event: React.FormEvent<HTMLFormElement>
  formData: FormData
}

export type CreateCategoryFormProps = {
  data?: CategoryProps
  actionLabel?: string
  onFormSubmit?: (props: CreateCategoryOnFormSubmitProps) => void
}

type CreateCategoryFormComponent = React.FunctionComponent<
  React.FormHTMLAttributes<HTMLFormElement> & CreateCategoryFormProps
>

export const CreateCategoryForm: CreateCategoryFormComponent = ({
  data,
  actionLabel,
  onFormSubmit,
  ...props
}) => {
  const [file, setFile] = useState<File>()
  const [categoryIcon, setCategoryIcon] = useState<string>()

  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()

    if (typeof props.onSubmit === 'function') {
      return props.onSubmit(event)
    }

    if (typeof onFormSubmit === 'function') {
      const formElement = event.target as HTMLFormElement
      const formData = new FormData(formElement)

      const uploadClient = new AnlugeUploadClient({
        imageSet: 'products',
        uploadedImageSizes: {
          normal: '500x500'
        }
      })

      if (file) {
        // formData.append('categoryIcon', file)

        uploadClient.uploadFile(file).then(uploadedImage => {
          console.log('uploadedImage -> ', uploadedImage)

          formData.append('category[icon]', uploadedImage.name)

          return onFormSubmit({
            event,
            formData
          })
        })
      }
    }
  }

  return (
    <form
      method="post"
      action="/api/store/categories"
      {...props}
      onSubmit={formSubmitHandler}
    >
      <Row>
        <Col md={12}>
          <FloatingLabel
            controlId="category-title"
            label="Nome"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Nome"
              autoComplete="off"
              name="category[title]"
              defaultValue={(data && data.title) || undefined}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <LongTextField
            rows={3}
            label="Descrição"
            name="category[description]"
            defaultValue={(data && data.description) || undefined}
          />
        </Col>
      </Row>

      {categoryIcon && (
        <input
          type="hidden"
          readOnly
          name="category[icon]"
          defaultValue={categoryIcon}
        />
      )}

      <FormGroup
        title="Ícone da categoria (opcional)"
        footer="Selecione uma imagem"
      >
        <Row>
          <Col md={12}>
            <DropZone
              height={80}
              maxFiles={1}
              accept={{ 'image/jpg': ['.jpg'], 'image/png': ['.png'] }}
              onChange={({ file }) => setFile(file)}
            />
          </Col>
        </Row>
      </FormGroup>

      <FormSubmit>{actionLabel || 'Continuar'}</FormSubmit>
    </form>
  )
}
