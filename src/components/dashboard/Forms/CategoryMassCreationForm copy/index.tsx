import { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'

import { categoryFactory, renderCategories } from './helpers'
import { Body, Container, Footer } from './styles'
import { CategoryProps } from './types'

type CategoryMassCreationFormProps = any

type CategoryMassCreationFormComponent =
  React.FunctionComponent<CategoryMassCreationFormProps>

export const CategoryMassCreationForm: CategoryMassCreationFormComponent =
  () => {
    const [categories, setCategories] = useState<Array<CategoryProps>>([])

    const addCategoryButtonClickHandler = () => {
      setCategories([...categories, categoryFactory()])
    }

    return (
      <Container>
        <Body>{renderCategories(categories)}</Body>
        <Footer>
          <button type="button" onClick={addCategoryButtonClickHandler}>
            <i>
              <FaPlus />
            </i>
            <span>Adicionar categoria</span>
          </button>
        </Footer>
      </Container>
    )
  }
