import { CategoryMapSlider } from 'store@components/NewsFeed/CategoryMapSlider'

export default async function StoreCategoriesPage() {
  return (
    <div className="flex flex-col w-full pt-36 pb-10 text-center">
      <CategoryMapSlider rows={7} />
    </div>
  )
}
