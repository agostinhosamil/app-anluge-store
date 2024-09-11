'use client'

import { useState } from 'react'
import { SelectableElementsContextProvider } from './context'
import { SelectableElementsContextDataObject, SelectedElements } from './types'

type SelectableElementsGroupProps = React.PropsWithChildren

type SelectableElementsGroupComponent =
  React.FunctionComponent<SelectableElementsGroupProps>

export const SelectableElementsGroup: SelectableElementsGroupComponent = ({
  children
}) => {
  const [selectedElements, setSelectedElements] = useState<SelectedElements>([])

  const selectableElementsContextDataObject: SelectableElementsContextDataObject =
    {
      selectedElements,

      selectElement(id) {
        setSelectedElements([...selectedElements, { id }])
      },

      deselectElement(elementId) {
        setSelectedElements(
          selectedElements.filter(
            selectedElement => selectedElement.id !== elementId
          )
        )
      },

      isElementSelected(elementId) {
        return selectedElements.some(
          selectedElement => selectedElement.id === elementId
        )
      },

      selectElements(elementsIds) {
        const newElements = elementsIds.map(id => ({ id }))

        setSelectedElements([...selectedElements, ...newElements])
      },

      deselectElements(elementsIds) {
        setSelectedElements(
          selectedElements.filter(
            selectedElement => !elementsIds.includes(selectedElement.id)
          )
        )
      }
    }

  return (
    <SelectableElementsContextProvider
      value={selectableElementsContextDataObject}
    >
      {children}
    </SelectableElementsContextProvider>
  )
}
