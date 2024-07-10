import { createContext } from 'react'
import { AdvertiseContextData } from './types'

export const AdvertiseContext = createContext<AdvertiseContextData>(
  {} as AdvertiseContextData
)
