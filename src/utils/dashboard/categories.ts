import { Category } from 'dashboard@components/Forms/CategoryMassCreationForm/types'

type CategoryProps = Omit<Category, 'id'>

export const categoryMassCreationFormDataToPrismaData = (
  data: Array<Category>
): Array<CategoryProps> => {
  return data.map(category => category)
}
