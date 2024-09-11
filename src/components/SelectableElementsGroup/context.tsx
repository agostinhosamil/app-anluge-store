import { createContext } from 'react'
import { SelectableElementsContextDataObject } from './types'

export const SelectableElementsContext =
  createContext<SelectableElementsContextDataObject>(
    {} as SelectableElementsContextDataObject
  )

type SelectableElementsContextProviderProps = React.PropsWithChildren<{
  value: SelectableElementsContextDataObject
}>

type SelectableElementsContextProviderComponent =
  React.FunctionComponent<SelectableElementsContextProviderProps>

export const SelectableElementsContextProvider: SelectableElementsContextProviderComponent =
  props => {
    return <SelectableElementsContext.Provider {...props} />
  }
