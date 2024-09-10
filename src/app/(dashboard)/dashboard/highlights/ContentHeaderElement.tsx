'use client'

import { Fragment, useState } from 'react'

import { Dialog } from '@components/Dialog'
import { ActionButton, ContentHeader } from 'dashboard@components/ContentHeader'

import { DialogCategoriesList } from './components/DialogCategoriesList'
import { DialogProductsList } from './components/DialogProductsList'
import { useHighlights } from './hook'

type ContentHeaderElementProps = React.PropsWithChildren

type ContentHeaderElementComponent =
  React.FunctionComponent<ContentHeaderElementProps>

export const ContentHeaderElement: ContentHeaderElementComponent = () => {
  const [showHighlightProductsDialog, setShowHighlightProductsDialog] =
    useState<boolean>(false)
  const [showHighlightCategoriesDialog, setShowHighlightCategoriesDialog] =
    useState<boolean>(false)

  const { highlights } = useHighlights()

  const highlightProductsDialogCloseHandler = () => {
    setShowHighlightProductsDialog(false)
  }

  const highlightProductsButtonClickHandler = () => {
    setShowHighlightProductsDialog(true)
  }

  const highlightCategoriesDialogCloseHandler = () => {
    setShowHighlightCategoriesDialog(false)
  }

  const highlightCategoriesButtonClickHandler = () => {
    setShowHighlightCategoriesDialog(true)
  }

  return (
    <Fragment>
      <ContentHeader title="Destaques">
        <ActionButton
          icon="FaPlus"
          label="Destacar categoria"
          onClick={highlightCategoriesButtonClickHandler}
        />
        <ActionButton
          icon="FaPlus"
          label="Destacar produto"
          onClick={highlightProductsButtonClickHandler}
        />
      </ContentHeader>

      <Dialog
        title="Adicionar produtos a lista de destaques"
        size="x-large"
        show={showHighlightProductsDialog}
        onClose={highlightProductsDialogCloseHandler}
      >
        <DialogProductsList highlightedProducts={highlights.products} />
      </Dialog>

      <Dialog
        title="Adicionar categorias a lista de destaques"
        size="x-large"
        show={showHighlightCategoriesDialog}
        onClose={highlightCategoriesDialogCloseHandler}
      >
        <DialogCategoriesList highlightedCategories={highlights.categories} />
      </Dialog>
    </Fragment>
  )
}
