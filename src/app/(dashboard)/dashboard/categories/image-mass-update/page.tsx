'use client'

import { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'

import { EntityCard } from '@components/dashboard/EntityCard'
import { Dialog } from '@components/Dialog'
import {
  DropZone,
  DropZoneChangeHandler,
  DropZoneChangeHandlerProps
} from '@components/DropZone'
import { FlatList } from '@components/FlatList'
import { FormGroup } from '@components/Form/FormGroup'
import { LoadingScreen } from '@components/LoadingScreen'
import { Container } from '@components/styled'
import { getCategoriesImagesFromFileList } from '@utils/getCategoriesImagesFromFileList'
import { getCategoriesImagesFromZipFile } from '@utils/getCategoriesImagesFromZipFile'
import { ActionButton, ContentHeader } from 'dashboard@components/ContentHeader'
import { FormSubmit } from 'dashboard@components/FormSubmit'
import { CategoryProps } from 'Types/Category'
import { resolveCategoryImageUrl } from '~/utils'

import { Category } from '@prisma/client'
import {
  HidePreviewListButtonWrapper,
  LoadImagesForm,
  LoadImagesFormDropZoneWrapper,
  LoadImagesFormMessage,
  LoadImagesFormTitle,
  SubTitle
} from './styles'

export default function CategoryImageMassUpdatePage() {
  const [file, setFile] = useState<File>()
  const [files, setFiles] = useState<Array<File>>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [showLoadImagesDialog, setShowLoadImagesDialog] =
    useState<boolean>(false)
  const [updatedCategories, setUpdatedCategories] = useState<
    Array<CategoryProps | Category | Omit<Category, 'createdAt' | 'updatedAt'>>
  >([])

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

    const categoriesImages = await getCategoriesImagesFromZipFile(file)

    if (categoriesImages) {
      alert('Imagens dos produtos atualizadas com sucesso')
    } else {
      alert('Failed')
    }

    // const updatedCategories = await massUpdateCategoriesImages(categoriesImages)

    // if (!updatedCategories) {
    //   alert('could not update categories images')
    // }

    // setUpdatedCategories(updatedCategories instanceof Array ? updatedCategories : [])

    setLoading(false)
  }

  const loadImagesFormSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault()

    if (files.length < 1) {
      return
    }

    setLoading(true)

    const updatedCategories = await getCategoriesImagesFromFileList(files)

    if (updatedCategories) {
      setUpdatedCategories(updatedCategories)
    } else {
      alert('Failed')
    }

    // const updatedCategories = await massUpdateCategoriesImages(categoriesImages)

    // if (!updatedCategories) {
    //   alert('could not update categories images')
    // }

    // setUpdatedCategories(updatedCategories instanceof Array ? updatedCategories : [])
    setShowLoadImagesDialog(false)
    setLoading(false)
  }

  const hidePreviewListButtonClickHandler = () => {
    setUpdatedCategories([])
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
        action="/api/store/categories/image-mass-update"
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

      {updatedCategories.length >= 1 && (
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
              data={updatedCategories}
              itemsCountPerIteration={10}
              showSearchBox={false}
              renderItem={category => (
                <EntityCard
                  title={category.title}
                  subTitle={category.description}
                  avatar={resolveCategoryImageUrl(category)}
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
            <span>Carregando imagens...</span>
          </LoadingScreen>
        )}
        <LoadImagesForm
          method="post"
          action="/api/store/categories/images/mass-update"
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
              height={110}
              onChange={loadImagesDropZoneChangeHandler}
            />
          </LoadImagesFormDropZoneWrapper>
          <FormSubmit>Continuar</FormSubmit>
        </LoadImagesForm>
      </Dialog>
    </Container>
  )
}
