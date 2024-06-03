import { SubmitButtonWrapper } from '@styles/dashboard/pages/categories/new/mass-creation-form'
import { ActionButton } from 'dashboard@components/ContentHeader/ActionButton'
import { useCategoryMassCreationFormContext } from 'dashboard@components/Forms/CategoryMassCreationForm/context'
import { Category } from '~/components/dashboard/Forms/CategoryMassCreationForm/types'
import { FormSubmit } from '~/components/dashboard/FormSubmit'
import { massStoreCategories } from '~/utils/models/category'

type CategoryMassCreationFormSubmitButtonProps = {
  position?: 'top' | 'bottom'
}

type CategoryMassCreationFormSubmitButtonComponent =
  React.FunctionComponent<CategoryMassCreationFormSubmitButtonProps>

export const CategoryMassCreationFormSubmitButton: CategoryMassCreationFormSubmitButtonComponent =
  props => {
    const context = useCategoryMassCreationFormContext()

    const buttonClickHandler: React.MouseEventHandler = event => {
      event.preventDefault()

      const categories = context.getAll({
        includeAll: true
      })

      if (categories.length >= 1) {
        handleMassCreationFormAction(categories)
      }
    }

    const handleMassCreationFormAction = async (
      categories: Array<Category>
    ): Promise<void> => {
      const storedCategories = await massStoreCategories(categories)

      if (storedCategories instanceof Array) {
        window.location.href = '/dashboard/categories'

        return
      }

      alert('Could not save categories')
    }

    if (props.position === 'top') {
      return (
        <ActionButton
          label="Salvar alterações"
          icon="FaFloppyDisk"
          onClick={buttonClickHandler}
          disabled={!context.valid()}
        />
      )
    }

    return (
      <SubmitButtonWrapper>
        <FormSubmit
          type="button"
          onClick={buttonClickHandler}
          disabled={!context.valid()}
        >
          Salvar alterações
        </FormSubmit>
      </SubmitButtonWrapper>
    )
  }
