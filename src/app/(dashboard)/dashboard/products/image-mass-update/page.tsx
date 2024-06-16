'use client'

import { Fragment, useState } from 'react'
import { Form } from 'react-bootstrap'

import { FormGroup } from '@components/Form/FormGroup'
import { ActionButton, ContentHeader } from 'dashboard@components/ContentHeader'
import { DropZone } from '~/components/DropZone'
import { LoadingScreen } from '~/components/styled'
import { getZipFileContent } from '~/utils'

export default function ProductImageMassUpdatePage() {
  const [file, setFile] = useState<File>()
  const [loading, setLoading] = useState<boolean>(false)

  const dropZoneChangeHandler = async (file: File) => {
    setLoading(true)

    const imageFiles = await getZipFileContent(file)

    console.log('Selected File Content => ', imageFiles)
    setLoading(false)
  }

  const acceptedFileTypes = {
    'application/zip': ['.zip'],
    'application/vnd.rar': ['.rar']
  }

  return (
    <Fragment>
      <ContentHeader>
        <ActionButton icon="FaImage" label="Carregar uma imagem" />
      </ContentHeader>
      <Form method="post" action="/api/store/products/image-mass-update">
        {loading && (
          <LoadingScreen>
            <h1>Loading...</h1>
          </LoadingScreen>
        )}
        <FormGroup
          title="Carregar arquivo compactado"
          subtitle="Carregue um arquivo compactado contendo as images dos produtos com nome sufixado pelo código do produto entre parenteses"
          footer="Arquivos suportados: .zip e .rar"
        >
          <DropZone
            height={210}
            accept={acceptedFileTypes}
            onChange={dropZoneChangeHandler}
          />
        </FormGroup>
      </Form>
    </Fragment>
  )
}
