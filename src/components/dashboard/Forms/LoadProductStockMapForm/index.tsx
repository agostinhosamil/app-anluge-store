import { useState } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'

import { DropZone } from '@components/DropZone'
import { FormGroup } from '@components/Form/FormGroup'
import { massStoreCategories } from '@utils/models/category'
import { massStoreProducts } from '@utils/models/product'
import { LoadingStockMap, StockMapLoaderResponse } from 'Types/Product'
import { FormSubmit } from 'dashboard@components/FormSubmit'
import { excelFileDataToJson } from 'dashboard@utils/excelFileDataToJson'
import { resolvePartnerCompanyNameByLoadingStockMapFormat } from '~/utils'

import { mapKeyRewriteMaps } from './mapKeyRewriteMaps'
import { stockMapLoaders } from './stockMapLoaders'
import { Container, LoadingScreen, SubmitButtonWrapper } from './styles'

type LoadProductStockMapFormProps = {
  format?: LoadingStockMap
  onImportEnd?: (response: StockMapLoaderResponse) => void
}

type LoadProductStockMapFormComponent =
  React.FunctionComponent<LoadProductStockMapFormProps>

enum LoadingState {
  IMPORTING_DATA = 'Importando dados do arquivo de mapa...',
  IMPORTING_CATEGORIES = 'Importando categorias...',
  IMPORTING_PRODUCTS = 'Importando produtos...',
  DONE = 'Importação concluída com sucesso!'
}

export const LoadProductStockMapForm: LoadProductStockMapFormComponent =
  props => {
    const [file, setFile] = useState<File>()
    const [loading, setLoading] = useState<boolean | LoadingState>(false)

    const formSubmitHandler: React.FormEventHandler = async event => {
      event.preventDefault()

      if (!file) {
        return
      }

      setLoading(LoadingState.IMPORTING_DATA)

      // type StockMap = {}
      // await new Promise(resolve => setTimeout(resolve, 5000))

      const mapKeyRewriteMap =
        (props.format && mapKeyRewriteMaps[props.format]) || undefined

      const mapData = await excelFileDataToJson(file, mapKeyRewriteMap)

      const stockMapLoader =
        (props.format && stockMapLoaders[props.format]) || undefined

      if (typeof stockMapLoader === 'function') {
        const { categories, products } = stockMapLoader(mapData)

        setLoading(LoadingState.IMPORTING_CATEGORIES)

        const storedCategories = await massStoreCategories(categories)

        if (storedCategories) {
          setLoading(LoadingState.IMPORTING_PRODUCTS)

          const storeProducts = await massStoreProducts(products)

          if (storeProducts) {
            setLoading(LoadingState.DONE)

            if (typeof props.onImportEnd === 'function') {
              props.onImportEnd({ categories, products })
            }

            return
          }
        }

        alert('Error due the request. Contact the tech team to resolve this...')

        // console.log('\n\n\n\nstockMapLoaderResponse => ', {
        //   categories,
        //   products
        // })
      } else {
        alert('Sorry ):... No loader to handle the sent file')
      }

      setLoading(false)
    }

    return (
      <Container
        method="post"
        action="/api/store/products/import/excel"
        onSubmit={formSubmitHandler}
      >
        <FormGroup
          title={`Arquivo de mapa da ${resolvePartnerCompanyNameByLoadingStockMapFormat(props.format)}`}
          subtitle="Selecione o arquivo excel que tenha sido passado pela fornecedora no formato habitual"
          footer="Contacte a equipe técnica caso a estrutura do arquivo tenha mudado."
        >
          <Row>
            <Col md={12}>
              <DropZone
                height={80}
                maxFiles={1}
                onChange={selectedFile => setFile(selectedFile)}
              />
            </Col>
          </Row>
        </FormGroup>
        <SubmitButtonWrapper>
          <FormSubmit disabled={Boolean(loading)}>
            {loading && (
              <i>
                <Spinner size="sm" />
              </i>
            )}
            Importar
          </FormSubmit>
        </SubmitButtonWrapper>
        {loading && (
          <LoadingScreen>
            {loading !== LoadingState.DONE && <Spinner />}
            <span>
              {typeof loading === 'string' ? loading : 'Importando...'}
            </span>
          </LoadingScreen>
        )}
      </Container>
    )
  }
