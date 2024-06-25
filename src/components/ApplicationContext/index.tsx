'use client'

import { ApplicationContext } from './context'
import { ApplicationContextProps } from './types'
import { appOriginValueFallback } from './utils'

export * from './context'
export * from './hook'
export * from './types'

type ApplicationContextProviderProps = {
  headers: {
    [key: string]: string
  }
}

type ApplicationContextProviderComponent = React.FunctionComponent<
  React.PropsWithChildren & ApplicationContextProviderProps
>

export const ApplicationContextProvider: ApplicationContextProviderComponent =
  props => {
    const applicationContextData: ApplicationContextProps = {
      origin: props.headers['x-app-origin'] || appOriginValueFallback()
    }

    return (
      <ApplicationContext.Provider value={applicationContextData}>
        {props.children}
      </ApplicationContext.Provider>
    )
  }
