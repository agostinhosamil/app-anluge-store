'use client'

import { Fragment, useState } from 'react'
import { Spinner } from 'react-bootstrap'

import { CardButtons } from '@components/CardButtons'
import { CardButton } from '@components/CardButtons/CardButton'
import { ContentHeader } from 'dashboard@components/ContentHeader'
import { ActionButton } from 'dashboard@components/ContentHeader/ActionButton'
import { EntityCard } from 'dashboard@components/EntityCard'
import {
  CreateProductForm,
  CreateProductOnFormSubmitProps
} from 'dashboard@components/Forms/CreateProductForm'
import { LoadProductStockMapForm } from 'dashboard@components/Forms/LoadProductStockMapForm'

import { Dialog } from '@components/Dialog'
import { EmptyListContainer } from '~/components/dashboard/styles'
// import { AnlugeUploadClient } from '~/services/upload'
import { LoadingStockMap } from '~/Types/Product'
import { useProduct } from '~/utils/hooks/useProduct'
import { createProductByFormData } from '~/utils/models/product'

export default function ProductsPage() {
  const [loadingStockMap, setLoadingStockMap] = useState<LoadingStockMap>()
  const [showCreateProductDialog, setShowCreateProductDialog] =
    useState<boolean>(false)
  const [showLoadStockMapDialog, setShowLoadStockMapDialog] =
    useState<boolean>(false)

  const productState = useProduct()

  const createProductDialogCloseHandler = () => {
    setShowCreateProductDialog(false)
  }

  const createProductButtonClickHandler = () => {
    setShowCreateProductDialog(true)
  }

  const loadStockMapButtonClickHandler = () => {
    setShowLoadStockMapDialog(true)
  }

  const loadStockMapDialogCloseHandler = () => {
    setLoadingStockMap(undefined)
    setShowLoadStockMapDialog(false)

    productState.reloadProducts()
  }

  const loadProductStockMapFormImportEndHandler = () => {
    loadStockMapDialogCloseHandler()
  }

  const createProductFormSubmitHandler = async ({
    formData
  }: CreateProductOnFormSubmitProps) => {
    // const formElement = event.target as HTMLFormElement
    // const formData = new FormData(formElement)

    const createdProduct = await createProductByFormData(formData)

    if (!createdProduct) {
      return alert('Could not create product')
    }

    productState.addProduct(createdProduct)

    setShowCreateProductDialog(false)

    console.log('Done -> ', createdProduct)
  }

  /* const clickHandler: React.ChangeEventHandler = async event => {
    const inputField = event.target as HTMLInputElement

    const file = (inputField.files && inputField.files[0]) || null

    // alert(process.env.NEXT_PUBLIC_ANLUGE_CDN_API_URL)

    if (file && /image\/(.*)/i.test(file.type)) {
      const uploadClient = new AnlugeUploadClient({
        imageSet: 'categories'
      })

      const uploadedFile = await uploadClient.uploadFile(file, {
        uploadedImageSizes: {
          large: '1200x1800',
          medium: '720x1200',
          small: '320x720',
          thumb: '80x120'
        }
      })

      console.log(uploadedFile)
    }
  } */

  return (
    <Fragment>
      <ContentHeader title="Produtos">
        <ActionButton
          label="Carregar mapa de stock"
          onClick={loadStockMapButtonClickHandler}
        />
        <ActionButton
          label="Registar produto"
          onClick={createProductButtonClickHandler}
        />
      </ContentHeader>

      <Dialog
        size="x-large"
        title="Registrar produto"
        onClose={createProductDialogCloseHandler}
        show={showCreateProductDialog}
      >
        <CreateProductForm onFormSubmit={createProductFormSubmitHandler} />
      </Dialog>
      <Dialog
        size="medium"
        title="Carregar mapa de stock"
        onClose={loadStockMapDialogCloseHandler}
        show={showLoadStockMapDialog}
      >
        {(loadingStockMap && (
          <LoadProductStockMapForm
            format={loadingStockMap}
            onImportEnd={loadProductStockMapFormImportEndHandler}
          />
        )) || (
          <CardButtons>
            <CardButton
              onClick={() => setLoadingStockMap(LoadingStockMap.STYLUS)}
            >
              Carregar mapa da stylus
            </CardButton>
            <CardButton
              onClick={() => setLoadingStockMap(LoadingStockMap.KASPERSKY)}
            >
              Carregar mapa da Kaspersky
            </CardButton>
            <CardButton
              onClick={() => setLoadingStockMap(LoadingStockMap.MICROSOFT)}
            >
              Carregar mapa da Microsoft
            </CardButton>
          </CardButtons>
        )}
      </Dialog>

      {/* <input type="file" onChange={clickHandler} /> */}
      {/* <button type="button" onClick={clickHandler}>
        Test Anluge cdn API
      </button> */}

      {productState.loading && (
        <div>
          <Spinner />
        </div>
      )}

      {!productState.loading && productState.products.length < 1 && (
        <EmptyListContainer>
          <h1>Sem registros para apresentar</h1>
          <h2>
            Comece a registrar os produtos ou importe um base de uma
            fornecedora.
          </h2>
          <ul>
            <li>
              <button type="button" onClick={loadStockMapButtonClickHandler}>
                Importar base de produtos
              </button>
            </li>
            <li>
              <button type="button" onClick={createProductButtonClickHandler}>
                Registrar produto
              </button>
            </li>
          </ul>
        </EmptyListContainer>
      )}

      {!productState.loading && productState.products.length >= 1 && (
        <div>
          {productState.products.map(product => (
            <EntityCard
              key={product.id}
              title={product.name}
              subTitle={product.category?.title}
              icons={['Edit', 'Remove']}
            />
          ))}
        </div>
      )}
    </Fragment>
  )
}
