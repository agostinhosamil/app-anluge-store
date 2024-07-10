import { AdvertiseContext } from './context'
import { AdvertiseContextData } from './types'

export * from './context'
export * from './hook'
export * from './types'
export * from './wrapper'

type AdvertiseContextProviderProps = {
  value: AdvertiseContextData
}

export const AdvertiseContextProvider: React.FunctionComponent<
  React.PropsWithChildren & AdvertiseContextProviderProps
> = props => {
  return (
    <AdvertiseContext.Provider value={props.value}>
      {props.children}
    </AdvertiseContext.Provider>
  )
}
