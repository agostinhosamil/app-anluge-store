import { createContext } from 'react'

import { SelectableElementContextDataObject } from './types'

export const SelectableElementContext =
  createContext<SelectableElementContextDataObject>(
    {} as SelectableElementContextDataObject
  )

type SelectableElementContextProviderProps = React.PropsWithChildren<{
  value: SelectableElementContextDataObject
}>

type SelectableElementContextProviderComponent =
  React.FunctionComponent<SelectableElementContextProviderProps>

export const SelectableElementContextProvider: SelectableElementContextProviderComponent =
  props => <SelectableElementContext.Provider {...props} />
