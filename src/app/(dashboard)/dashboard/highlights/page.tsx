import { Fragment } from 'react'

import { CategoriesList } from './components/CategoriesList'
import { ProductsList } from './components/ProductsList'
import { ContentHeaderElement } from './ContentHeaderElement'
import { HighlightsContextProvider } from './context'
import { getHighlights } from './utils'

export default async function DashboardHighlightsPage() {
  const { categories, products } = await getHighlights()

  const emptyHighlightList = !(categories.length >= 1 || products.length >= 1)

  return (
    <HighlightsContextProvider highlights={{ categories, products }}>
      <div className="w-full block">
        <ContentHeaderElement />
        <div className="w-full flex flex-col py-3 gap-5">
          <Fragment>
            {products.length >= 1 && (
              <div className="flex flex-col w-full gap-4">
                <h2 className="dark:text-zinc-300 dark:font-extrabold">
                  Produtos em destaque na loja
                </h2>
                <ProductsList />
              </div>
            )}
          </Fragment>
          <Fragment>
            {categories.length >= 1 && (
              <div className="flex flex-col w-full gap-4">
                <h2 className="dark:text-zinc-300 dark:font-extrabold">
                  Categorias em destaque na loja
                </h2>
                <CategoriesList />
              </div>
            )}
          </Fragment>

          {emptyHighlightList && (
            <div>
              <strong>Sem destaques para apresentar</strong>
              <p>
                Ao adicionar produtos em destaque na página inicial da loja,
                poderá geri-los a partir daqui.
              </p>
            </div>
          )}
        </div>
      </div>
    </HighlightsContextProvider>
  )
}
