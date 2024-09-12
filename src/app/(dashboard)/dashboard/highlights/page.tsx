import { CategoriesList } from './components/CategoriesList'
import { EmptyHighlightList } from './components/EmptyHighlightList'
import { ProductsList } from './components/ProductsList'
import { ContentHeaderElement } from './ContentHeaderElement'
import { HighlightsContextProvider } from './context'
import { getHighlights } from './utils'

export default async function DashboardHighlightsPage() {
  const { categories, products } = await getHighlights()

  return (
    <HighlightsContextProvider highlights={{ categories, products }}>
      <div className="w-full block">
        <ContentHeaderElement />
        <div className="w-full flex flex-col py-3 gap-5">
          <ProductsList />
          <CategoriesList />
          <EmptyHighlightList />
        </div>
      </div>
    </HighlightsContextProvider>
  )
}
