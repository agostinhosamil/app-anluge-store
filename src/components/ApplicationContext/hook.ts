import { useContext } from 'react'

import { ApplicationContext } from './context'

export const useApplicationContext = () => useContext(ApplicationContext)

export const useApp = () => useApplicationContext()
