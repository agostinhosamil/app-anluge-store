import { useContext } from 'react'

import { SelectableElementContext } from './context'

export const useSelectable = () => useContext(SelectableElementContext)
