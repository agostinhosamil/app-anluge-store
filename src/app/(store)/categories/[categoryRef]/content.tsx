import { CategoryProductsList } from '~/components/store/NewsFeed/CategoryProductsList'
import { CategoryProps, CategoryWithProductId } from '~/Types/Category'

type ContentProps = {
  category: CategoryProps | CategoryWithProductId
}

type ContentComponent = React.FunctionComponent<
  React.PropsWithChildren & ContentProps
>

export const Content: ContentComponent = async ({ category, ...props }) => {
  return (
    <div className="w-full h-auto m-auto block relative max-w-[1320px]">
      <div className="w-full h-auto block px-[70px] pt-[30px]">
        <CategoryProductsList category={category} />
      </div>
      <div className="w-full h-auto block px-[70px]">{props.children}</div>
    </div>
  )
}
