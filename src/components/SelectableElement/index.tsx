'use client'

import { ElementType } from 'react'

import { useSelectableGroup } from '@components/SelectableElementsGroup/hook'
import { SelectedElementId } from '@components/SelectableElementsGroup/types'

import { SelectableElementContextProvider } from './context'
import { SelectableElementContextDataObject } from './types'

type SelectableElementProps = React.PropsWithChildren<{
  id: SelectedElementId
  selected?: boolean
  element?: ElementType<SelectableElementContextDataObject>
}>

type SelectableElementComponent =
  React.FunctionComponent<SelectableElementProps>

export * from '@components/SelectableElementsGroup'

export const SelectableElement: SelectableElementComponent = props => {
  const context = useSelectableGroup()

  if (!context.selectedElements) {
    throw new Error(
      'SelectableElement cannot be used outside a SelectableElementsGroup'
    )
  }

  const selected = context.isElementSelected(props.id)

  const selectableElementContextDataObject: SelectableElementContextDataObject =
    {
      selected,

      inputProps: {
        type: 'checkbox',
        checked: selected,
        onChange() {
          if (context.isElementSelected(props.id)) {
            return context.deselectElement(props.id)
          }

          context.selectElement(props.id)
        }
      }
    }

  const Element = props.element

  return (
    <SelectableElementContextProvider
      value={selectableElementContextDataObject}
    >
      {!Element ? (
        props.children
      ) : (
        <Element {...selectableElementContextDataObject} />
      )}
    </SelectableElementContextProvider>
  )
}
