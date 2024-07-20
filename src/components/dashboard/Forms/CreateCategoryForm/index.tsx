import { useState } from 'react'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'

import { DropZone } from '@components/DropZone'
import { FormGroup } from '@components/Form/FormGroup'
import { LongTextField } from '@components/Form/LongTextField'
import { FormSubmit } from 'dashboard@components/FormSubmit'
import { CategoryProps } from 'Types/Category'
import { AnlugeUploadClient } from '~/services/upload'
import { noEmpty, uploadedImageUrl } from '~/utils'

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
  // const [categoryIcon] = useState<string>()
  // const [categoryBanner] = useState<string>()
  const [iconFile, setIconFile] = useState<File>()
  const [bannerFile, setBannerFile] = useState<File>()

  const imageUrl = (
    imageFileName: undefined | null | boolean | string
  ): string | undefined => {
    if (!noEmpty(imageFileName)) {
      return undefined
    }

    return uploadedImageUrl(imageFileName)
  }

  const formSubmitHandler: React.FormEventHandler<
    HTMLFormElement
  > = async event => {
    event.preventDefault()

    if (typeof props.onSubmit === 'function') {
      return props.onSubmit(event)
    }

    if (typeof onFormSubmit === 'function') {
      const formElement = event.target as HTMLFormElement
      const formData = new FormData(formElement)

      const uploadClient = new AnlugeUploadClient({
        imageSet: 'categories'
      })

      if (bannerFile) {
        // formData.append('categoryIcon', file)

        const uploadedIconImage = await uploadClient.uploadFile(bannerFile, {
          uploadedImageSizes: {
            'x-small': '339x181',
            small: '510x272',
            normal: '500x500',
            medium: '880x470',
            large: '1500x800'
          }
        })

        formData.append('category[banner]', uploadedIconImage.name)

        // .then( => {
        //   // console.log('uploadedImage -> ', uploadedImage)

        //   formData.append('category[icon]', uploadedImage.name)

        //   return onFormSubmit({
        //     event,
        //     formData
        //   })
        // })
      }

      if (iconFile) {
        // formData.append('categoryIcon', file)

        const uploadedIconImage = await uploadClient.uploadFile(iconFile, {
          uploadedImageSizes: {
            'x-small': '181x181',
            small: '272x272',
            normal: '500x500',
            medium: '850x850',
            large: '1200x1200'
          }
        })

        formData.append('category[icon]', uploadedIconImage.name)
      }

      return onFormSubmit({
        event,
        formData
      })
    }
  }

  return (
    <form
      method="post"
      action="/api/store/categories"
      {...props}
      onSubmit={event => formSubmitHandler(event)}
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

      {/* {categoryIcon && (
        <input
          type="hidden"
          readOnly
          name="category[icon]"
          defaultValue={categoryIcon}
        />
      )} */}

      <Row>
        <Col md={4}>
          <FormGroup title="Ícone" footer="Selecione uma imagem">
            <Row>
              <Col md={12}>
                <DropZone
                  height={80}
                  maxFiles={1}
                  defaultValue={imageUrl(data?.icon)}
                  accept={{ 'image/jpg': ['.jpg'], 'image/png': ['.png'] }}
                  onChange={({ file }) => setIconFile(file)}
                />
              </Col>
            </Row>
          </FormGroup>
        </Col>
        <Col md={8}>
          <FormGroup title="Banner" footer="Selecione uma imagem">
            <Row>
              <Col md={12}>
                <DropZone
                  height={150}
                  maxFiles={1}
                  defaultValue={imageUrl(data?.banner)}
                  accept={{ 'image/jpg': ['.jpg'], 'image/png': ['.png'] }}
                  onChange={({ file }) => setBannerFile(file)}
                />
              </Col>
            </Row>
          </FormGroup>
        </Col>
      </Row>

      <FormSubmit>{actionLabel || 'Continuar'}</FormSubmit>
    </form>
  )
}
