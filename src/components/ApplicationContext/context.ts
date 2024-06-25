import { createContext } from 'react'

import { ApplicationContextProps } from './types'

export const ApplicationContext = createContext<ApplicationContextProps>(
  {} as ApplicationContextProps
)
