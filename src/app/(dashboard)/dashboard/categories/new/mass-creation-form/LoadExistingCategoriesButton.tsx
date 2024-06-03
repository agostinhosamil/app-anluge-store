import { useState } from 'react'

import { getCategories } from '@utils/models/category'
import { useCategoryMassCreationFormContext } from 'dashboard@components/Forms/CategoryMassCreationForm/context'
import { Spinner } from 'react-bootstrap'

export const LoadExistingCategoriesButton = () => {
  const [disabled, setDisabled] = useState<boolean>(false)

  const context = useCategoryMassCreationFormContext()

  const loadExistingCategoriesButtonClickHandler = async () => {
    const categories = await getCategories()

    if (categories.length >= 1) {
      const existingCategories = categories.filter(
        category => !context.categoryExists(category.id)
      )

      context.setCategories([...existingCategories, ...context.categories])
    }

    setDisabled(false)
  }

  return (
    <button
      type="button"
      role="button"
      disabled={disabled}
      onClick={() => {
        setDisabled(true)

        if (!disabled) {
          loadExistingCategoriesButtonClickHandler()
        }
      }}
    >
      {disabled && (
        <i>
          <Spinner size="sm" />
        </i>
      )}
      Listar categorias existentes
    </button>
  )
}
