import { FaPlus, FaX } from 'react-icons/fa6'

import { Fragment } from 'react'
import { useCategoryMassCreationFormContext } from './context'
import { categoryFactory, renderCategories } from './helpers'
import { Body, Container, Footer, OptionsWrapper } from './styles'

type CategoryMassCreationFormProps = any

type CategoryMassCreationFormComponent =
  React.FunctionComponent<CategoryMassCreationFormProps>

export const CategoryMassCreationForm: CategoryMassCreationFormComponent =
  () => {
    // const [categories, setCategories] = useState<Array<Category>>([])

    const context = useCategoryMassCreationFormContext()

    const addCategoryButtonClickHandler = () => {
      context.addCategory(categoryFactory())
    }

    const categories = context.getAll()

    return (
      <Fragment>
        <Container>
          {categories.length >= 1 && (
            <Body>{renderCategories(categories)}</Body>
          )}

          <Footer>
            <button type="button" onClick={addCategoryButtonClickHandler}>
              <i>
                <FaPlus />
              </i>
              <span>Adicionar categoria</span>
            </button>
          </Footer>
        </Container>
        <OptionsWrapper>
          <button
            type="button"
            onClick={() => {
              if (confirm('Term certeza?')) {
                context.clean()
              }
            }}
          >
            <i>
              <FaX />
            </i>
            <span>Limpar formulário</span>
          </button>
        </OptionsWrapper>
      </Fragment>
    )
  }
