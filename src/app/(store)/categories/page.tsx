import { CategoryMapSlider } from 'store@components/NewsFeed/CategoryMapSlider'

export default async function StoreCategoriesPage() {
  return (
    <div className="flex flex-col w-full py-10">
      <CategoryMapSlider rows={7} />
    </div>
  )
}
