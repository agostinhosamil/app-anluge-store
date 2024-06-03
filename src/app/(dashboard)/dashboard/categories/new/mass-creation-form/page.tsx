'use client'

import { useState } from 'react'

import { UseFullLinksListWrapper } from '@styles/dashboard/pages/categories/new/mass-creation-form'
import { ContentHeader } from 'dashboard@components/ContentHeader'
import { ActionButton } from 'dashboard@components/ContentHeader/ActionButton'
import { CategoryMassCreationForm } from 'dashboard@components/Forms/CategoryMassCreationForm'
import { CategoryMassCreationFormContextProvider } from 'dashboard@components/Forms/CategoryMassCreationForm/context'
import { CategoryMassCreationFormQuicGuide } from '~/components/dashboard/CategoryMassCreationFormQuicGuide'

import { Dialog } from '~/components/Dialog'
import { CategoryMassCreationFormSubmitButton } from './CategoryMassCreationFormSubmitButton'
import { LoadExistingCategoriesButton } from './LoadExistingCategoriesButton'

export default function CategoryMassCreationFormPage() {
  const [showGuide, setShowGuide] = useState<boolean>(false)

  const guideDialogCloseHandler = () => {
    setShowGuide(false)
  }

  const showGuideButtonClickHandler = () => {
    setShowGuide(true)
  }

  return (
    <CategoryMassCreationFormContextProvider>
      <ContentHeader title="Criar categoria">
        <ActionButton label="Criação simples" />
        <CategoryMassCreationFormSubmitButton position="top" />
      </ContentHeader>
      <UseFullLinksListWrapper>
        <ul>
          <li>
            <LoadExistingCategoriesButton />
          </li>
          <li>
            <button type="button" onClick={showGuideButtonClickHandler}>
              Ler guia rápido sobre este formulário
            </button>
          </li>
        </ul>
      </UseFullLinksListWrapper>
      <Dialog
        title="Criação de categoria"
        closeButtonLabel="Fechar guia"
        onClose={guideDialogCloseHandler}
        show={showGuide}
        size="large"
      >
        <CategoryMassCreationFormQuicGuide />
      </Dialog>
      <CategoryMassCreationForm />
      <CategoryMassCreationFormSubmitButton />
    </CategoryMassCreationFormContextProvider>
  )
}
