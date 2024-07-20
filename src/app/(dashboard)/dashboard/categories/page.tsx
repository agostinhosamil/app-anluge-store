'use client'

import { Fragment, useRef, useState } from 'react'

import { CardButton, CardButtons } from '@components/CardButtons'
import { Partial } from '@components/Partial'
import { ContentHeader } from 'dashboard@components/ContentHeader'
import { ActionButton } from 'dashboard@components/ContentHeader/ActionButton'
import {
  CreateCategoryForm,
  CreateCategoryOnFormSubmitProps
} from 'dashboard@components/Forms/CreateCategoryForm'

import { Dialog } from '@components/Dialog'
import { FlatList } from '@components/FlatList'
import { RemoveForm } from 'dashboard@components/Forms/RemoveForm'
import { EntityCard } from '~/components/dashboard/EntityCard'
import { EmptyListContainer } from '~/components/dashboard/styles'
import { CategoryProps } from '~/Types/Category'
import { resolveCategoryImageUrl } from '~/utils'
import { useCategory } from '~/utils/hooks/useCategory'
import {
  createCategoryByFormData,
  deleteCategoryById,
  updateCategoryByFormData
} from '~/utils/models/category'

export default function CategoriesPage() {
  const [showCreateCategoryDialog, setShowCreateCategoryDialog] =
    useState<boolean>(false)
  const [showCategorySimpleCreationForm, setShowCategorySimpleCreationForm] =
    useState<boolean>(false)
  const [showDeleteCategoryDialog, setShowDeleteCategoryDialog] =
    useState<boolean>(false)

  const categoryToEditState = useRef<CategoryProps>()
  const categoryToDeleteState = useRef<CategoryProps>()

  const categoryState = useCategory()

  const dialogCloseHandler = () => {
    setShowCreateCategoryDialog(false)
    setShowCategorySimpleCreationForm(false)
  }

  const deleteCategoryDialogCloseHandler = () => {
    setShowDeleteCategoryDialog(false)
  }

  const simpleCreationFormButtonClickHandler = () => {
    setShowCategorySimpleCreationForm(true)
  }

  const createCategoryFormSubmitHandler = async ({
    formData
  }: CreateCategoryOnFormSubmitProps) => {
    // const categoryIconFile = formData.get('categoryIcon')

    // formData.delete('categoryIcon')
    // formData.append('category[icon]', 'category-icon-placeholder.jpg')

    const createdCategory = await (!categoryToEditState.current
      ? createCategoryByFormData(formData)
      : updateCategoryByFormData(categoryToEditState.current.id, formData))

    if (!createdCategory) {
      return alert('Could not save category')
    }

    if (!categoryToEditState.current) {
      categoryState.addCategory(createdCategory)
    } else {
      categoryState.updateCategory(
        categoryToEditState.current.id,
        createdCategory
      )
    }

    categoryToEditState.current = undefined

    setShowCreateCategoryDialog(false)
    setShowCategorySimpleCreationForm(false)
  }

  const deleteCategoryFormSubmitHandler = async () => {
    if (!categoryToDeleteState.current) {
      return
    }

    const category = categoryToDeleteState.current

    const deletedCategory = await deleteCategoryById(category.id)

    if (!deletedCategory) {
      return alert('Could not remove category')
    }

    categoryToDeleteState.current = undefined

    categoryState.deleteCategory(category.id)

    setShowDeleteCategoryDialog(false)
  }

  const resolveDialogTitle = (): string => {
    if (categoryToEditState.current) {
      return 'Editar categoria'
    }

    const title = `Criar categoria`

    return title.concat(showCategorySimpleCreationForm ? '' : ' Pelo...')
  }

  return (
    <Fragment>
      <ContentHeader title="Categorias">
        <Partial can={'category:edit'}>
          <ActionButton
            label="Editar em massa"
            onClick={() => alert('Editar categorias em massa')}
          />
        </Partial>
        <Partial can={'category:create'}>
          <ActionButton
            label="Criar categoria"
            onClick={() => setShowCreateCategoryDialog(true)}
          />
        </Partial>
      </ContentHeader>

      <Dialog
        size="large"
        title={resolveDialogTitle()}
        onClose={dialogCloseHandler}
        show={showCreateCategoryDialog}
      >
        {(showCategorySimpleCreationForm && (
          <CreateCategoryForm
            onFormSubmit={createCategoryFormSubmitHandler}
            data={categoryToEditState.current}
          />
        )) || (
          <CardButtons>
            <CardButton onClick={simpleCreationFormButtonClickHandler}>
              Formulário de criação simples
            </CardButton>
            <CardButton href="/dashboard/categories/new/mass-creation-form">
              Formulário de criação em massa
            </CardButton>
          </CardButtons>
        )}
      </Dialog>

      <Dialog
        size="medium"
        title="Remover categoria"
        show={showDeleteCategoryDialog}
        onClose={deleteCategoryDialogCloseHandler}
      >
        <RemoveForm onSubmit={deleteCategoryFormSubmitHandler}>
          <h5>Tem certeza?</h5>
          <p>
            A categoria <b>{categoryToDeleteState.current?.title}</b> será
            removida do sistema, bem como os seus demais produtos.
          </p>
          <p>Esta ação não de poder ser revertida</p>
        </RemoveForm>
      </Dialog>

      {!categoryState.loading && categoryState.categories.length < 1 && (
        <EmptyListContainer>
          <h1>Sem registros para apresentar</h1>
          <h2>Comece a criar as categorias para organizar os produtos</h2>
          <ul>
            <li>
              <button
                type="button"
                onClick={() => setShowCreateCategoryDialog(true)}
              >
                Criar categoria
              </button>
            </li>
          </ul>
        </EmptyListContainer>
      )}

      <FlatList
        data={categoryState.categories}
        loading={categoryState.loading}
        itemsCountPerIteration={15}
        placeholderCountOnLoading={15}
        paginationStyle="client-demand"
        renderItem={category => (
          <EntityCard
            avatar={resolveCategoryImageUrl(category)}
            avatarSize="xx-large"
            entity="category"
            key={category.id}
            title={category.title}
            subTitle={category.slag}
            icons={['Edit', 'Remove', 'Options']}
            onEdit={() => {
              categoryToEditState.current = category

              setShowCreateCategoryDialog(true)
              setShowCategorySimpleCreationForm(true)
            }}
            onRemove={() => {
              categoryToDeleteState.current = category
              setShowDeleteCategoryDialog(true)
            }}
            options={[
              {
                label: 'Adicionar subcategoria',
                can: 'category:edit',
                icon: 'FaFolderPlus',
                onClick() {
                  alert('Adicionar subcategoria')
                }
              }
            ]}
          />
        )}
      />

      {/* <div>
        {(categoryState.loading && <Spinner />) ||
          categoryState.categories.map(category => (
            <EntityCard
              // avatar={category.icon || 'category-avatar-placeholder.jpg'}
              avatarSize="large"
              entity="category"
              key={category.id}
              title={category.title}
              subTitle={category.slag}
              icons={['Edit', 'Remove', 'Options']}
              onEdit={() => {
                categoryToEditState.current = category

                setShowCreateCategoryDialog(true)
                setShowCategorySimpleCreationForm(true)
              }}
              onRemove={() => {
                categoryToDeleteState.current = category
                setShowDeleteCategoryDialog(true)
              }}
              options={[
                {
                  label: 'Adicionar subcategoria',
                  can: 'category:edit',
                  icon: 'FaFolderPlus',
                  onClick() {
                    alert('Adicionar subcategoria')
                  }
                }
              ]}
            />
          ))}
      </div> */}
    </Fragment>
  )
}
