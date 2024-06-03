import { SelectField } from '@components/Form/SelectField'
import { SelectFieldData } from '@components/Form/SelectField/types'
import { useCategory } from '~/utils/hooks/useCategory'

export const CategorySelectField = () => {
  const { categories, loading } = useCategory()

  if (loading) {
    return <SelectField label="Carregando categorias..." data={[]} />
  }

  const categoryDataList: SelectFieldData = categories.map(category => ({
    label: category.title,
    icon: 'FaStoreSlash',
    value: category.id
  }))

  return <SelectField label="Selecionar categoria" data={categoryDataList} />
}
