import { Fragment, useState } from 'react'
import { Col, FloatingLabel, Form, Row, Spinner } from 'react-bootstrap'

import { DropZone } from '@components/DropZone'
import { FormGroup } from '@components/Form/FormGroup'
import { LongTextField } from '@components/Form/LongTextField'
import { RichTextField } from '@components/Form/RichTextField'
import { SelectField } from '@components/Form/SelectField'
import { SelectFieldData } from '@components/Form/SelectField/types'
import { TagsField } from '@components/Form/TagsField'
import { AnlugeUploadClient } from '@services/upload'
import { useCategory } from '@utils/hooks/useCategory'
import { FormSubmit } from 'dashboard@components/FormSubmit'
import { ProductProps } from 'Types/Product'

import { acceptedImageFileTypes } from './acceptedImageFileTypes'
import { productTypes } from './productTypes'
import { ProductImages } from './types'
import {
  categoryListToSelectFieldData,
  productImagesFactory,
  registeredProductMedia,
  resolveProductTypeKey
} from './utils'

export type CreateProductOnFormSubmitProps = {
  event: React.FormEvent<HTMLFormElement>
  formData: FormData
}

type CreateProductFormProps = {
  data?: ProductProps
  actionLabel?: string
  onFormSubmit?: (props: CreateProductOnFormSubmitProps) => void
}

type CreateProductFormComponent = React.FunctionComponent<
  React.FormHTMLAttributes<HTMLFormElement> & CreateProductFormProps
>

export const CreateProductForm: CreateProductFormComponent = ({
  data,
  actionLabel,
  onFormSubmit,
  ...props
}) => {
  const { categories, loading: categoriesLoading } = useCategory()

  const [loading, setLoading] = useState<boolean>(false)
  const [deletedMediaIds, setDeletedMediaIds] = useState<Array<string>>([])
  const [files, setFiles] = useState<ProductImages>(
    productImagesFactory(8, data)
  )

  // if (loading) {
  //   return (
  //     <div>
  //       <Spinner />
  //     </div>
  //   )
  // }

  const handleOnFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    formData: FormData,
    productImageFiles: Array<File | null>
  ) => {
    const uploadClient = new AnlugeUploadClient({
      imageSet: 'products',
      uploadedImageSizes: {
        large: '1200x1600',
        medium: '800x1200',
        normal: '540x800',
        small: '360x540'
      }
    })

    const productUploadedImages = await Promise.all(
      productImageFiles.map(productImageFile => {
        return uploadClient.uploadFile(productImageFile as File)
      })
    )

    productUploadedImages.forEach(productUploadedImage => {
      formData.append('product[medias][]', productUploadedImage.name)
    })

    if (onFormSubmit) {
      onFormSubmit({ event, formData })
    }
  }

  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()

    setLoading(true)

    const formElement = event.target as HTMLFormElement
    const formData = new FormData(formElement)

    const productImages = files
      .filter(({ file }) => file instanceof File)
      .map(({ file }) => file)

    if (typeof onFormSubmit === 'function') {
      return handleOnFormSubmit(event, formData, productImages)
    }

    if (typeof props.onSubmit === 'function') {
      props.onSubmit(event)
    }
  }

  const updateSelectedFile = (
    selectedFile: File,
    selectedFileId: number | string
  ): void => {
    setFiles(
      files.map(stateFile => {
        if (stateFile.id !== selectedFileId) {
          return stateFile
        }

        return {
          ...stateFile,
          file: selectedFile
        }
      })
    )
  }

  // const categoryDataList: SelectFieldData = categories.map(category => ({
  //   label: category.title,
  //   icon: 'FaStoreSlash',
  //   value: category.id
  // }))

  const categoryDataList: SelectFieldData =
    categoryListToSelectFieldData(categories)

  return (
    <form
      method="post"
      action="/api/store/products"
      {...props}
      onSubmit={formSubmitHandler}
    >
      <Row>
        <Col md={12}>
          <SelectField
            label={
              categoriesLoading
                ? 'Carregando categorias...'
                : 'Selecionar categoria'
            }
            data={categoryDataList}
            name="product[categoryId]"
            defaultValue={(data && data.categoryId) || undefined}
          />
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <FloatingLabel
            controlId="product-name"
            label="Nome do produto"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Nome do produto"
              autoComplete="off"
              name="product[name]"
              defaultValue={(data && data.name) || undefined}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <SelectField
            label="Tipo de produto"
            name="product[type]"
            id="product-id"
            data={productTypes}
            defaultValue={
              (data && resolveProductTypeKey(data.type)) || undefined
            }
          />
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <LongTextField
            label="Resumo (Breve descrição)"
            rows={3}
            name="product[summary]"
            defaultValue={(data && data.summary) || undefined}
          />
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <RichTextField
            name="product[description]"
            defaultValue={(data && data.description) || undefined}
          />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <FloatingLabel
            controlId="product-price"
            label="Preço"
            className="mb-3"
          >
            <Form.Control
              type="number"
              min={0}
              placeholder="Preço"
              autoComplete="off"
              name="product[price]"
              defaultValue={(data && data.price) || undefined}
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel
            controlId="product-code"
            label="Código do produto (Referência da fornecedora)"
            className="mb-3"
          >
            <Form.Control
              type="text"
              min={0}
              placeholder="Código do produto"
              autoComplete="off"
              name="product[code]"
              title="Opcional"
              defaultValue={(data && data.code) || undefined}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <FormGroup
            title="Fotos do produto"
            subtitle="Adicione até 5 fotos do produto"
            footer="Tamanho mínimo recomendado para as fotos: 1000x100px"
          >
            <Row>
              {files.map(file => (
                <Col md={3} key={file.id}>
                  <DropZone
                    accept={acceptedImageFileTypes}
                    defaultValue={file.fileUrl}
                    onChange={selectedFile =>
                      updateSelectedFile(selectedFile, file.id)
                    }
                    onDelete={() => {
                      if (registeredProductMedia(file.id, data)) {
                        setDeletedMediaIds([...deletedMediaIds, file.id])
                      }
                    }}
                  />
                </Col>
              ))}
            </Row>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <FormGroup
            title="Estoque"
            footer="Deixe em branco para aplicar o valor padrão de algum campo"
          >
            <Row>
              <Col md={4}>
                <FloatingLabel
                  controlId="product-stock"
                  label="Quantidade"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    min={0}
                    placeholder="Quantidade"
                    autoComplete="off"
                    name="product[stock]"
                    defaultValue={(data && data.stock) || undefined}
                  />
                </FloatingLabel>
              </Col>
              <Col md={4}>
                <FloatingLabel
                  controlId="product-sku"
                  label="SKU"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="SKU"
                    autoComplete="off"
                    name="product[sku]"
                    defaultValue={(data && data.sku) || undefined}
                  />
                </FloatingLabel>
              </Col>
              <Col md={4}>
                <FloatingLabel
                  controlId="product-bar-code"
                  label="Código de barras"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    min={0}
                    placeholder="Código de barras"
                    autoComplete="off"
                    name="product[barCode]"
                    defaultValue={(data && data.barCode) || undefined}
                  />
                </FloatingLabel>
              </Col>
            </Row>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <TagsField
            name="product[tags]"
            initialData={
              (data && data.tags.map(({ id, slag }) => ({ id, slag }))) ||
              undefined
            }
          />
        </Col>
      </Row>

      <Fragment>
        {deletedMediaIds.map(deletedMediaId => (
          <input
            key={deletedMediaId}
            type="hidden"
            value={deletedMediaId}
            name="product[deleted][medias][]"
          />
        ))}
      </Fragment>

      <FormSubmit disabled={loading}>
        {loading && (
          <i>
            <Spinner size="sm" />
          </i>
        )}
        {actionLabel || 'Continuar'}
      </FormSubmit>
    </form>
  )
}
