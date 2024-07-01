'use client'

import { useState } from 'react'

import { FormGroup } from '@components/Form/FormGroup'
import { LoadingScreen } from '@components/LoadingScreen'
import { ActionButton, ContentHeader } from 'dashboard@components/ContentHeader'
import { FormSubmit } from 'dashboard@components/FormSubmit'

import { DropZone, DropZoneChangeHandler } from '~/components/DropZone'
import { PropertyProps } from '~/Types/Property'
import { getJsonFileData } from '~/utils/getJsonFileData'
import { massUpdateProductProps } from '~/utils/models/product'
import { Container, Form, SubmitButtonWrapper } from './styles'
import { ProductsProperties } from './types'
import { getProductsProperties } from './utils'

export default function ProductsPropertiesMassUpdatePage() {
  const [file, setFile] = useState<File>()
  const [loading, setLoading] = useState<boolean | React.ReactNode>(false)

  const acceptedFileTypes = {
    'application/json': ['.json']
  }

  const acceptedFileTypesStr = Object.values(acceptedFileTypes)
    .map(value => value.join(', '))
    .join(', ')

  const dropZoneChangeHandler: DropZoneChangeHandler = async ({ file }) => {
    setFile(file)
  }

  const formSubmitHandler: React.FormEventHandler<
    HTMLFormElement
  > = async event => {
    event.preventDefault()

    if (!file) {
      return
    }

    setLoading(true)

    const jsonFileData = await getJsonFileData<ProductsProperties>(file)

    if (!jsonFileData) {
      setLoading(false)
      return
    }

    const getProductId = (properties: Array<PropertyProps>): string => {
      return String(properties[0]?.productId)
    }

    const getProductData = (productId: string) => {
      const propertyObject = Object.values(jsonFileData).find(
        prop => prop.product.id === productId
      )

      return (propertyObject && propertyObject.product) || null
    }

    const productsProperties = getProductsProperties(jsonFileData)

    for (const productProperties of productsProperties) {
      const productId = getProductId(productProperties)
      const product = getProductData(productId)

      if (product) {
        setLoading(
          <span>
            {`[${product.id}]`}
            <br />
            {`A atualizar detalhes do produto "${product.name}"...`}
          </span>
        )
      }

      const updatedProductsProperties = await massUpdateProductProps(
        productId,
        productProperties
      )

      if (!updatedProductsProperties) {
        console.error('Nooooooooooooooooo!!!')
      }
    }

    setLoading(false)
  }

  return (
    <Container>
      <ContentHeader title="Atualizar especificações em massa">
        <ActionButton />
      </ContentHeader>
      <LoadingScreen show={Boolean(loading)}>{loading}</LoadingScreen>
      <Form
        method="post"
        action="/api/store/products/properties-mass-update"
        onSubmit={event => formSubmitHandler(event)}
      >
        <FormGroup
          title="Registro das especificações dos produtos"
          subtitle={`
              Carregue um arquivo contendo as especificações dos produtos, 
              este aquivo deverá ter sido fornecido pela equipe técnica (TI) 
              e ter o formato certo para que o carregamento seja bem sucedido
            `}
          footer={`Formatos de arquivo suportados: ${acceptedFileTypesStr}`}
        >
          <DropZone
            height={310}
            onChange={dropZoneChangeHandler}
            accept={acceptedFileTypes}
            onDelete={() => setFile(undefined)}
          />
        </FormGroup>
        <SubmitButtonWrapper>
          <FormSubmit loading={Boolean(loading)} disabled={!file}>
            Carregar
          </FormSubmit>
        </SubmitButtonWrapper>
      </Form>
    </Container>
  )
}
