import { Fragment, useEffect, useId, useRef, useState } from 'react'

import { FaCameraRetro, FaPlus, FaTrash } from 'react-icons/fa6'
import { useCategoryMassCreationFormContext } from './context'
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
import { Category } from './types'

type CategoryInputFieldProps = {
  data: Category
  onChange?: (data: Category) => void
  onDelete?: (data: Category) => void
}

type CategoryInputFieldComponent =
  React.FunctionComponent<CategoryInputFieldProps>

export const CategoryInputField: CategoryInputFieldComponent = props => {
  const [focus, setFocus] = useState<boolean>(false)
  // const [removeFocusOnTextInputBlur, setRemoveFocusOnTextInputBlur] =
  //   useState<boolean>(false)
  // const [data, setData] = useState<Category>(props.data)

  const removeFocusOnTextInputBlurState = useRef<boolean>(false)

  const fileInputId = useId()
  const context = useCategoryMassCreationFormContext()
  const textInputRef = useRef<HTMLInputElement>(null)
  // (textInputElement: HTMLInputElement | null): void => {
  //   if (textInputElement) {
  //     textInputElement.focus()
  //   }
  // }

  useEffect(() => {
    const lastContextCategory =
      context.categories[-1 + context.categories.length]

    if (textInputRef.current && lastContextCategory.id === props.data.id) {
      textInputRef.current.focus()
    }
  }, [])

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
    if (removeFocusOnTextInputBlurState.current) {
      if (event.target.value !== props.data.title) {
        context.updateCategory(props.data.id, {
          title: event.target.value,
          description: event.target.value
        })
      }

      setFocus(false)

      return
    }

    const inputElement = event.target as HTMLElement

    inputElement.focus()
  }

  const textInputKeyDownHandler: React.KeyboardEventHandler = event => {
    const keyBoardFunctionsByKeyNameMap = {
      enter: () => {
        context.addCategory(
          categoryFactory({
            parentId: props.data.parentId
          })
        )
      },

      tab: () => {
        context.addCategory(
          categoryFactory({
            parentId: props.data.id
          })
        )
      },

      delete: () => {
        if (event.shiftKey) {
          deleteSubcategoryButtonClickHandler()
        }
      }
    }

    const keyFunctionExists = (
      keyName: string
    ): keyName is keyof typeof keyBoardFunctionsByKeyNameMap => {
      return keyName in keyBoardFunctionsByKeyNameMap
    }

    const pressedKey = event.key.toLowerCase() // as keyof typeof keyBoardFunctionsByKeyNameMap

    if (keyFunctionExists(pressedKey)) {
      event.preventDefault()

      removeFocusOnTextInputBlurState.current = true

      keyBoardFunctionsByKeyNameMap[pressedKey]()
    }
  }

  const categoryInputFieldContainerMouseEnterHandler = () => {
    removeFocusOnTextInputBlurState.current = false
  }

  const categoryInputFieldContainerMouseLeaveHandler = () => {
    removeFocusOnTextInputBlurState.current = true
  }

  const addSubcategoryButtonClickHandler = () => {
    removeFocusOnTextInputBlurState.current = true

    context.addCategory(
      categoryFactory({
        parentId: props.data.id
      })
    )
  }

  const deleteSubcategoryButtonClickHandler = () => {
    if (context.categoryHasChildren(props.data.id)) {
      const shouldDelete = confirm('Tem certeza??')

      if (!shouldDelete) {
        return
      }
    }

    context.removeCategory(props.data.id)
  }

  const hasSubcategories = (category: Category): boolean => {
    const subcategories = context.getCategoryChildren(category.id)

    return subcategories.length >= 1
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
                  <button
                    type="button"
                    onClick={deleteSubcategoryButtonClickHandler}
                  >
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
              ref={textInputRef}
              defaultValue={props.data.title}
              onFocus={textInputFocusHandler}
              onBlur={textInputBlurHandler}
              onKeyDown={textInputKeyDownHandler}
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
      {hasSubcategories(props.data) && (
        <SubcategoriesWrapper>
          {renderCategories(context.getCategoryChildren(props.data.id))}
        </SubcategoriesWrapper>
      )}
    </CategoryInputFieldContainer>
  )
}
