import { useContext } from 'react'

import { SelectableElementsContext } from './context'

export const useSelectableGroup = () => useContext(SelectableElementsContext)
