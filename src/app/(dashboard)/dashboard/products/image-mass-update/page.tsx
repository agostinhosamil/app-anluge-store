'use client'

import { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'

import { FormGroup } from '@components/Form/FormGroup'
import { Container } from '@components/styled'
import { ActionButton, ContentHeader } from 'dashboard@components/ContentHeader'
import { FormSubmit } from 'dashboard@components/FormSubmit'
import { ProductProps } from '~/Types/Product'
import { Dialog } from '~/components/Dialog'
import {
  DropZone,
  DropZoneChangeHandler,
  DropZoneChangeHandlerProps
} from '~/components/DropZone'
import { FlatList } from '~/components/FlatList'
import { EntityCard } from '~/components/dashboard/EntityCard'
import { LoadingScreen } from '~/components/styled'
import { getProductsImagesFromZipFile, resolveProductImageUrl } from '~/utils'
import { massUpdateProductsImages } from '~/utils/models/product'

import { getProductsImagesFromFileList } from '~/utils/getProductsImagesFromFileList'
import {
  HidePreviewListButtonWrapper,
  LoadImagesForm,
  LoadImagesFormDropZoneWrapper,
  LoadImagesFormMessage,
  LoadImagesFormTitle,
  SubTitle
} from './styles'

export default function ProductImageMassUpdatePage() {
  const [file, setFile] = useState<File>()
  const [files, setFiles] = useState<Array<File>>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [showLoadImagesDialog, setShowLoadImagesDialog] =
    useState<boolean>(false)
  const [updatedProducts, setUpdatedProducts] = useState<Array<ProductProps>>(
    []
  )

  const dropZoneChangeHandler = async ({
    file
  }: DropZoneChangeHandlerProps) => {
    setFile(file)
  }

  const loadImagesDropZoneChangeHandler: DropZoneChangeHandler = ({
    files
  }) => {
    setFiles(files)
  }

  const formSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!file) {
      return
    }

    setLoading(true)

    const productsImages = await getProductsImagesFromZipFile(file)

    const updatedProducts = await massUpdateProductsImages(productsImages)

    if (!updatedProducts) {
      alert('could not update products images')
    }

    setUpdatedProducts(updatedProducts instanceof Array ? updatedProducts : [])

    setLoading(false)
  }

  const loadImagesFormSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault()

    if (files.length < 1) {
      return
    }

    setLoading(true)

    const productsImages = await getProductsImagesFromFileList(files)
    const updatedProducts = await massUpdateProductsImages(productsImages)

    if (!updatedProducts) {
      alert('could not update products images')
    }

    setUpdatedProducts(updatedProducts instanceof Array ? updatedProducts : [])
    setShowLoadImagesDialog(false)
    setLoading(false)
  }

  const hidePreviewListButtonClickHandler = () => {
    setUpdatedProducts([])
  }

  const loadImagesDialogCloseHandler = () => {
    setShowLoadImagesDialog(false)
  }

  const loadImagesButtonClickHandler = () => {
    setShowLoadImagesDialog(true)
  }

  const acceptedFileTypes = {
    'application/zip': ['.zip']
    // 'application/vnd.rar': ['.rar']
  }

  return (
    <Container>
      <ContentHeader>
        <ActionButton
          icon="FaImage"
          label="Carregar imagens diretamente"
          onClick={loadImagesButtonClickHandler}
        />
      </ContentHeader>

      <Form
        method="post"
        action="/api/store/products/image-mass-update"
        onSubmit={event => formSubmitHandler(event)}
      >
        {loading && !showLoadImagesDialog && (
          <LoadingScreen>
            <h1>Loading...</h1>
          </LoadingScreen>
        )}
        <FormGroup
          title="Carregar arquivo compactado"
          subtitle="Carregue um arquivo compactado contendo as images dos produtos com nome sufixado pelo código do produto entre parenteses"
          footer={'Arquivos suportados: '.concat(
            Object.values(acceptedFileTypes)
              .map(value => value.join(', '))
              .join(', ')
          )}
        >
          <DropZone
            height={210}
            accept={acceptedFileTypes}
            onChange={dropZoneChangeHandler}
          />
        </FormGroup>
        <Row>
          <Col md={12}>
            <FormSubmit disabled={loading}>
              {(loading && 'Carregando...') || 'Continuar'}
            </FormSubmit>
          </Col>
        </Row>
      </Form>

      {updatedProducts.length >= 1 && (
        <Row>
          <Col md={8}>
            <SubTitle>Produtos atualizados:</SubTitle>
          </Col>
          <Col md={4}>
            <HidePreviewListButtonWrapper>
              <button type="button" onClick={hidePreviewListButtonClickHandler}>
                Ocultar resultados
              </button>
            </HidePreviewListButtonWrapper>
          </Col>
          <Col md={12}>
            <FlatList
              data={updatedProducts}
              itemsCountPerIteration={10}
              showSearchBox={false}
              renderItem={product => (
                <EntityCard
                  title={product.name}
                  subTitle={product.category?.title}
                  avatar={resolveProductImageUrl(product)}
                  avatarSize="x-large"
                />
              )}
            />
          </Col>
        </Row>
      )}

      <Dialog
        show={showLoadImagesDialog}
        size="medium"
        onClose={loadImagesDialogCloseHandler}
        title="Carregar imagens diretamente"
      >
        {loading && (
          <LoadingScreen>
            <h1>Carregando imagens...</h1>
          </LoadingScreen>
        )}
        <LoadImagesForm
          method="post"
          action="/api/store/products/images/mass-update"
          onSubmit={event => loadImagesFormSubmitHandler(event)}
        >
          <LoadImagesFormTitle>
            Arraste e solte abaixo as imagens dos produtos para realizar a
            atualização em mass.
          </LoadImagesFormTitle>
          <LoadImagesFormMessage>
            Certifique-se de que cada imagem tem o nome sufixado com o código do
            produto entre parêntesis ou o nome da imagem seja o próprio código.
          </LoadImagesFormMessage>
          <LoadImagesFormDropZoneWrapper>
            <DropZone
              maxFiles={undefined}
              height={70}
              onChange={loadImagesDropZoneChangeHandler}
            />
          </LoadImagesFormDropZoneWrapper>
          <FormSubmit>Continuar</FormSubmit>
        </LoadImagesForm>
      </Dialog>
    </Container>
  )
}
