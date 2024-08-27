import { FlatList } from '@components/FlatList'
import { PostPreview } from 'blog@components/NewsFeed/PostPreview'
import { SearchBox } from 'blog@components/SearchBox'
import { range } from '~/utils'

export default async function BlogHomePage() {
  const posts = range(120).map(i => ({
    id: i,
    title: `Post number ${i} title`,
    description: `
      Without a doubt, Bernie Barber was right in saying that, either
      relational approach or strategic management becomes extremely
      important for The Service of Practical Product (Beau Arevalo in
      The Book of the Continuing Utility Doctrine) Nevertheless, one
      should accept that components of segments of the major outcomes
      the major decisions, that lie behind the referential arguments.
      Therefore, the concept of the software engineering concepts and
      practices can be treated as the only solution the sustainability
      of the project and the data management and data architecture
      framework. The real reason of the ability bias successfully the
      emergency planning. It may reveal how the strategic management
      directly an importance of the integration prospects the
      structure absorption. This seems to be a presumably obvious step
      towards the operational system the ultimate advantage of
      definitive breach over alternate practices. On the assumption of
      the condition of the corresponding stem, the advantage of the
      the profit reveals the patterns of any well-known practice.
    `
  }))

  return (
    <div className="flex w-full flex-col gap-3">
      <SearchBox />
      <FlatList
        data={posts}
        placeholderCountOnLoading={15}
        itemsCountPerIteration={15}
        paginationStyle="standard"
        showSearchBox={false}
      >
        <PostPreview />
      </FlatList>
    </div>
  )
}
