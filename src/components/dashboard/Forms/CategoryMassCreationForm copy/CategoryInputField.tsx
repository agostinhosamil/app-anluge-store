import { Fragment, useId, useState } from 'react'

import { FaCameraRetro, FaPlus, FaTrash } from 'react-icons/fa6'
import { categoryFactory, renderCategories } from './helpers'
import {
  CategoryInputActionsListWrapper,
  CategoryInputFieldBody,
  CategoryInputFieldContainer,
  CategoryInputFieldFooter,
  CategoryInputFieldHeader,
  FileInputWrapper,
  InputFieldWrapper,
  SubcategoriesWrapper,
  TextInputWrapper
} from './styles'
import { CategoryProps } from './types'

type CategoryInputFieldProps = {
  data: CategoryProps
  onChange?: (data: CategoryProps) => void
  onDelete?: (data: CategoryProps) => void
}

type CategoryInputFieldComponent =
  React.FunctionComponent<CategoryInputFieldProps>

export const CategoryInputField: CategoryInputFieldComponent = props => {
  const [focus, setFocus] = useState<boolean>(false)
  const [removeFocusOnTextInputBlur, setRemoveFocusOnTextInputBlur] =
    useState<boolean>(false)
  const [data, setData] = useState<CategoryProps>(props.data)

  const fileInputId = useId()

  const OnlyWhenFocus: React.FunctionComponent<
    React.PropsWithChildren
  > = props => {
    if (!focus) {
      return null
    }

    return <Fragment>{props.children}</Fragment>
  }

  const textInputFocusHandler = () => {
    setFocus(true)
  }

  const textInputBlurHandler = (event: React.BaseSyntheticEvent) => {
    if (removeFocusOnTextInputBlur) {
      return setFocus(false)
    }

    const inputElement = event.target as HTMLElement

    inputElement.focus()
  }

  const categoryInputFieldContainerMouseEnterHandler = () => {
    setRemoveFocusOnTextInputBlur(false)
  }

  const categoryInputFieldContainerMouseLeaveHandler = () => {
    setRemoveFocusOnTextInputBlur(true)
  }

  const addSubcategoryButtonClickHandler = () => {
    setData({
      ...data,
      subcategories: [...data.subcategories, categoryFactory()]
    })
  }

  return (
    <CategoryInputFieldContainer>
      <CategoryInputFieldBody
        onMouseEnter={categoryInputFieldContainerMouseEnterHandler}
        onMouseLeave={categoryInputFieldContainerMouseLeaveHandler}
      >
        <OnlyWhenFocus>
          <CategoryInputFieldHeader>
            <CategoryInputActionsListWrapper>
              <ul>
                <li>
                  <button
                    type="button"
                    onClick={addSubcategoryButtonClickHandler}
                  >
                    <i>
                      <FaPlus />
                    </i>
                    <span>Adicionar subcategoria</span>
                  </button>
                </li>
                <li>
                  <button type="button">
                    <i>
                      <FaTrash />
                    </i>
                    <span>Eliminar</span>
                  </button>
                </li>
              </ul>
            </CategoryInputActionsListWrapper>
          </CategoryInputFieldHeader>
        </OnlyWhenFocus>
        <InputFieldWrapper>
          <FileInputWrapper>
            <input id={fileInputId} type="file" accept="image/*" />
            <label htmlFor={fileInputId}>
              <i>
                <FaCameraRetro />
              </i>
            </label>
          </FileInputWrapper>
          <TextInputWrapper>
            <input
              type="text"
              autoComplete="off"
              autoCapitalize="off"
              onFocus={textInputFocusHandler}
              onBlur={textInputBlurHandler}
            />
          </TextInputWrapper>
        </InputFieldWrapper>
        <OnlyWhenFocus>
          <CategoryInputFieldFooter>
            <span>
              Prime Enter para adicionar mais uma categoria - Prime Tab para
              adicionar subcategoria
            </span>
          </CategoryInputFieldFooter>
        </OnlyWhenFocus>
      </CategoryInputFieldBody>
      {data.subcategories.length >= 1 && (
        <SubcategoriesWrapper>
          {renderCategories(data.subcategories)}
        </SubcategoriesWrapper>
      )}
    </CategoryInputFieldContainer>
  )
}
