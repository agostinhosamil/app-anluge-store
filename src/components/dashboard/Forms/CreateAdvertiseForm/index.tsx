import { Advertise } from '@prisma/client'
import { useEffect, useState } from 'react'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { FaCheck, FaPlus } from 'react-icons/fa6'

import { Dialog } from '@components/Dialog'
import { DropZone, DropZoneChangeHandlerProps } from '@components/DropZone'
import { CheckButton } from '@components/Form/CheckButton'
import { FormGroup } from '@components/Form/FormGroup'
import { LongTextField } from '@components/Form/LongTextField'
import { AnlugeUploadClient } from '@services/upload'
import { FormSubmit } from 'dashboard@components/FormSubmit'
import { ProductSelectList } from 'dashboard@components/ProductSelectList'

import { LoadingScreen } from '@components/styled'
import { PostProps } from '~/Types/Post'
import { ProductProps } from '~/Types/Product'
import { formDataToJson } from '~/utils/formDataToJson'
import { CheckOption } from './CheckOption'
import { sources } from './sources'
import {
  AdvertiseSourceInputContainer,
  AdvertiseSourceSelectButton,
  AdvertiseSourceTypeButtonsContainer,
  AdvertiseSourceTypeButtonWrapper,
  CheckButtonLabel,
  CheckOptionsGroup,
  CheckOptionWrapper,
  Container,
  DropZoneLabel
} from './styles'
import { AdvertiseSource, AdvertiseSourceType } from './types'

type CreateAdvertiseFormData = {
  advertise: {
    banner: File | undefined
    title: string
    content: string
    duration: number
    popup: boolean
    source: 'post' | 'product' | 'link'
    link?: string
    post?: string
    product?: string
    size: 'CARD' | 'BANNER'
    position: 'TOP' | 'MIDDLE' | 'BOTTOM'
  }
}

export type CreateAdvertiseFormSubmitProps = {
  event: React.FormEvent<HTMLFormElement>
  formData: FormData
  data: CreateAdvertiseFormData
}

export type CreateAdvertiseFormSubmitHandler = (
  props: CreateAdvertiseFormSubmitProps
) => void

type CreateAdvertiseFormProps = {
  data?: Advertise
  pending?: boolean
  onFormSubmit?: (props: CreateAdvertiseFormSubmitProps) => void
  onBannerChange?: (file: File) => void
}

type AdvertiseSourceInputProps = React.PropsWithChildren & {
  type: AdvertiseSourceType
}

type CreateAdvertiseFormComponent = React.FunctionComponent<
  React.FormHTMLAttributes<HTMLFormElement> & CreateAdvertiseFormProps
>

export const CreateAdvertiseForm: CreateAdvertiseFormComponent = ({
  data,
  pending,
  onBannerChange,
  onFormSubmit,
  ...props
}) => {
  const [file, setFile] = useState<File>()
  const [post] = useState<PostProps>()
  const [product, setProduct] = useState<ProductProps>()
  const [loading, setLoading] = useState<boolean>(Boolean(pending))
  const [selectProductDialogTitle, setSelectProductDialogTitle] =
    useState<string>('Carregando produtos...')
  const [source, setSource] = useState<AdvertiseSource>({
    label: 'Produto',
    type: 'product'
  })

  useEffect(() => {
    setLoading(Boolean(pending))
  }, [pending])

  const [showSelectProductDialog, setShowSelectProductDialog] =
    useState<boolean>(false)

  const AdvertiseSourceInput = (props: AdvertiseSourceInputProps) => {
    if (!(source && source.type === props.type)) {
      return null
    }

    return (
      <AdvertiseSourceInputContainer>
        {props.children}
      </AdvertiseSourceInputContainer>
    )
  }

  const dropZoneChangeHandler = ({ file }: DropZoneChangeHandlerProps) => {
    if (typeof onBannerChange === 'function') {
      onBannerChange(file)
    }

    setFile(file)
  }

  const selectProductDialogCloseHandler = () => {
    setShowSelectProductDialog(false)
  }

  const formSubmitHandler: React.FormEventHandler<
    HTMLFormElement
  > = async event => {
    event.preventDefault()

    setLoading(true)

    // TODO: Validate the form data

    if (typeof onFormSubmit === 'function') {
      const uploadClient = new AnlugeUploadClient({
        imageSet: 'advertises',
        uploadedImageSizes: {
          large: '1200x800',
          normal: '920x460',
          small: '620x310',
          'x-small': '380x190',
          'xx-small': '250x125'
        }
      })

      const formElement = event.target as HTMLFormElement
      const formData = new FormData(formElement)

      if (file instanceof File) {
        const uploadedImage = await uploadClient.uploadFile(file)

        formData.append('advertise[banner]', uploadedImage.name)

        // console.log('\n\n\nuploadedImage.name => ', uploadedImage.name)
      }

      const advertiseDuration = parseInt(
        String(formData.get('advertise[duration]') || '0')
      )

      const currentDate = new Date(Date.now())

      currentDate.setDate(currentDate.getDate() + advertiseDuration)

      formData.append('advertise[expiresAt]', currentDate.toISOString())

      const jsonFormData = formDataToJson<CreateAdvertiseFormData>(formData)

      // setLoading(false)

      return onFormSubmit({
        event,
        formData,
        data: jsonFormData
      })
    }

    if (typeof props.onSubmit === 'function') {
      return props.onSubmit(event)
    }

    setLoading(false)
  }

  const advertisePreviewReady = (): boolean => false

  return (
    <Container>
      {loading && <LoadingScreen />}
      <Form
        method="post"
        action="/api/"
        {...props}
        onSubmit={event => formSubmitHandler(event)}
      >
        <Row>
          <Col md={12}>
            <DropZoneLabel>Banner</DropZoneLabel>
          </Col>
          <Col md={12}>
            <DropZone
              height={280}
              maxFiles={1}
              accept={{ 'image/jpg': ['.jpg'], 'image/png': ['.png'] }}
              onChange={dropZoneChangeHandler}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FloatingLabel
              controlId="advertise-title"
              label="Título"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Título"
                autoComplete="off"
                name="advertise[title]"
                defaultValue={(data && data.title) || undefined}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <LongTextField
              label="Conteúdo (Descrição)"
              rows={3}
              name="advertise[content]"
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FloatingLabel
              controlId="advertise-duration"
              label="Duração (Dias)"
              className="mb-3"
            >
              <Form.Control
                type="number"
                min={1}
                max={1000}
                placeholder="Duração (Dias)"
                autoComplete="off"
                name="advertise[duration]"
                defaultValue={
                  (data && data.expiresAt.toISOString()) || undefined
                }
              />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <CheckButton name="advertise[popup]">
              <CheckButtonLabel>Exibir como popup</CheckButtonLabel>
            </CheckButton>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <FormGroup title="Objeto do anúncio">
              <input
                type="hidden"
                name="advertise[source]"
                defaultValue={(source && source.type) || undefined}
              />
              <AdvertiseSourceTypeButtonsContainer>
                {sources.map(({ label, type }, sourceIndex) => (
                  <AdvertiseSourceTypeButtonWrapper key={sourceIndex}>
                    <button
                      type="button"
                      data-type={type}
                      data-selected={source && source.type === type}
                      onClick={() => setSource({ label, type })}
                    >
                      {source && source.type === type && (
                        <i>
                          <FaCheck />
                        </i>
                      )}
                      <span>{label}</span>
                    </button>
                  </AdvertiseSourceTypeButtonWrapper>
                ))}
              </AdvertiseSourceTypeButtonsContainer>
              <AdvertiseSourceInput type="link">
                <FloatingLabel
                  controlId="advertise-link"
                  label="Link"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Link"
                    autoComplete="off"
                    name="advertise[link]"
                    defaultValue={(data && data.link) || undefined}
                  />
                </FloatingLabel>
              </AdvertiseSourceInput>
              <AdvertiseSourceInput type="post">
                <input
                  type="hidden"
                  defaultValue={post && post.id}
                  name="advertise[postId]"
                />
                <AdvertiseSourceSelectButton>
                  <i>
                    <FaPlus />
                  </i>
                  Selecionar publicação
                </AdvertiseSourceSelectButton>
              </AdvertiseSourceInput>
              <AdvertiseSourceInput type="product">
                <input
                  type="hidden"
                  defaultValue={product && product.id}
                  name="advertise[productId]"
                />
                <AdvertiseSourceSelectButton
                  onClick={() => setShowSelectProductDialog(true)}
                >
                  <i>
                    <FaPlus />
                  </i>
                  Selecionar produto
                </AdvertiseSourceSelectButton>
              </AdvertiseSourceInput>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <FormGroup title="Tamanho do anúncio">
              <CheckOptionsGroup $height={193}>
                <CheckOptionWrapper $width="30%">
                  <CheckOption
                    name="advertise[style]"
                    value="CARD"
                    type="radio"
                    label="Pequeno"
                  />
                </CheckOptionWrapper>
                <CheckOptionWrapper>
                  <CheckOption
                    name="advertise[style]"
                    value="BANNER"
                    type="radio"
                    label="Grande"
                    defaultChecked={true}
                  />
                </CheckOptionWrapper>
              </CheckOptionsGroup>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup title="Posicionamento do anúncio">
              <CheckOptionsGroup $direction="vertical">
                <CheckOptionWrapper>
                  <CheckOption
                    name="advertise[position]"
                    value="TOP"
                    type="radio"
                    label="Início da página"
                  />
                </CheckOptionWrapper>
                <CheckOptionWrapper>
                  <CheckOption
                    name="advertise[position]"
                    value="FEED"
                    type="radio"
                    label="Feed (Meio da página)"
                    defaultChecked={true}
                  />
                </CheckOptionWrapper>
                <CheckOptionWrapper>
                  <CheckOption
                    name="advertise[position]"
                    value="BOTTOM"
                    type="radio"
                    label="Final da página"
                  />
                </CheckOptionWrapper>
              </CheckOptionsGroup>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={5}>
            <FormSubmit
              buttonStyle="success"
              type="button"
              disabled={!advertisePreviewReady()}
            >
              Pré-visualizar anúncio
            </FormSubmit>
          </Col>
          <Col md={7}>
            <FormSubmit>Publicar anúncio</FormSubmit>
          </Col>
        </Row>
      </Form>
      <Dialog
        show={showSelectProductDialog}
        title={selectProductDialogTitle}
        size="medium"
        onClose={selectProductDialogCloseHandler}
      >
        <ProductSelectList
          onSelect={selectedProduct => {
            setShowSelectProductDialog(false)
            setProduct(selectedProduct)
          }}
          onLoadEnd={() => {
            setSelectProductDialogTitle('Selecionar produto')
          }}
        />
      </Dialog>
    </Container>
  )
}
