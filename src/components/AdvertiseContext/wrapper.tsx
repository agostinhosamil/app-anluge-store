'use client'

import { useRef, useState } from 'react'

import { getActiveAdvertises } from '@utils/models/advertise'
import { AdvertiseGroups, AdvertiseGroupsLists } from 'Types/Advertise'
import { noEmpty } from '~/utils'

import { AdvertiseContextData, AdvertiseContextProvider } from '.'

type AdvertiseContextWrapperProps = {
  data?: any
}

export const AdvertiseContextWrapper: React.FunctionComponent<
  React.PropsWithChildren & AdvertiseContextWrapperProps
> = ({ children }) => {
  const advertiseGroupsFactory = (): AdvertiseGroups => ({
    skyscraper: [],
    large: [],
    small: []
  })

  const [advertises] = useState<AdvertiseGroupsLists>({
    top: advertiseGroupsFactory(),
    feed: advertiseGroupsFactory(),
    bottom: advertiseGroupsFactory()
  })

  const advertisesStateRef = useRef<AdvertiseGroupsLists>()

  const advertiseContextData: AdvertiseContextData = {
    advertises,

    getAdvertises: async () => {
      const activeAdvertises = await getActiveAdvertises()

      if (advertisesStateRef.current) {
        return advertisesStateRef.current
      }

      if (activeAdvertises) {
        advertisesStateRef.current = activeAdvertises

        return activeAdvertises
      }

      return {
        top: advertiseGroupsFactory(),
        feed: advertiseGroupsFactory(),
        bottom: advertiseGroupsFactory()
      }
    },

    getBottomAdvertises: async size => {
      const advertises = await advertiseContextData.getAdvertises('bottom')

      return (noEmpty(size) && advertises.bottom[size]) || advertises.bottom
    },

    getFeedAdvertises: async size => {
      const advertises = await advertiseContextData.getAdvertises('feed')

      return (noEmpty(size) && advertises.bottom[size]) || advertises.bottom
    },

    getTopAdvertises: async size => {
      const advertises = await advertiseContextData.getAdvertises('top')

      return (noEmpty(size) && advertises.bottom[size]) || advertises.bottom
    }
  }

  return (
    <AdvertiseContextProvider value={advertiseContextData}>
      {children}
    </AdvertiseContextProvider>
  )
}
