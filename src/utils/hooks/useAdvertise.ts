import { useEffect, useState } from 'react'

import { getActiveAdvertises, getAdvertises } from '@utils/models/advertise'
import {
  AdvertiseGroups,
  AdvertiseGroupsLists,
  AdvertiseProps
} from '~/Types/Advertise'
import { noEmpty } from '..'

export type UseAdvertiseHookDataObject<T = any> = {
  advertises: T
  loading: boolean
  addAdvertise: (advertise: AdvertiseProps) => void
  addAdvertises: (advertiseList: Array<AdvertiseProps>) => void
  setAdvertises: (advertiseList: Array<AdvertiseProps>) => void
  removeAdvertise: (advertiseId: string) => void
  updateAdvertise: (
    advertiseId: string,
    advertiseData: Partial<AdvertiseProps>
  ) => void
}

type AdvertiseStatePropsMap = {
  group: AdvertiseGroups
  none: Array<AdvertiseProps>
}

export const useAdvertise = <
  AdvertiseStatePropKey extends keyof AdvertiseStatePropsMap = 'none'
>(
  group?: keyof AdvertiseGroupsLists
): UseAdvertiseHookDataObject<
  AdvertiseStatePropsMap[AdvertiseStatePropKey]
> => {
  const [loading, setLoading] = useState<boolean>(true)
  const [advertises, setAdvertises] = useState<
    AdvertiseStatePropsMap[AdvertiseStatePropKey]
  >([] as unknown as AdvertiseStatePropsMap[AdvertiseStatePropKey])

  useEffect(() => {
    const handleEffect = async () => {
      if (noEmpty(group)) {
        const advertises = await getActiveAdvertises()

        if (advertises) {
          const groupAdvertises = advertises[group]

          setLoading(false)
          setAdvertises(
            groupAdvertises as AdvertiseStatePropsMap[AdvertiseStatePropKey]
          )
        }

        return
      }

      const registeredAdvertises = await getAdvertises()

      setLoading(false)
      setAdvertises(
        registeredAdvertises as AdvertiseStatePropsMap[AdvertiseStatePropKey]
      )
    }

    handleEffect()
  }, [])

  return {
    advertises,
    loading,

    addAdvertise(advertise) {
      const currentAdvertises = advertises instanceof Array ? advertises : []

      if (advertises instanceof Array) {
        setAdvertises([
          ...currentAdvertises,
          advertise
        ] as AdvertiseStatePropsMap[AdvertiseStatePropKey])
      }
    },

    removeAdvertise(advertiseId) {
      if (!(advertises instanceof Array)) {
        return
      }

      if (advertises instanceof Array) {
        const filteredAdvertises = advertises.filter(
          advertise => advertise.id !== advertiseId
        )

        setAdvertises(
          filteredAdvertises as AdvertiseStatePropsMap[AdvertiseStatePropKey]
        )
      }
    },

    updateAdvertise(advertiseId, advertiseData) {
      if (!(advertises instanceof Array)) {
        return
      }

      if (advertises instanceof Array) {
        const updatedAdvertiseList = advertises.map(advertise => {
          if (advertise.id !== advertiseId) {
            return advertise
          }

          return {
            ...advertise,
            ...advertiseData
          }
        })

        setAdvertises(
          updatedAdvertiseList as AdvertiseStatePropsMap[AdvertiseStatePropKey]
        )
      }
    },

    setAdvertises(advertiseList) {
      setAdvertises(
        advertiseList as AdvertiseStatePropsMap[AdvertiseStatePropKey]
      )
    },

    addAdvertises(advertiseList) {
      if (advertises instanceof Array) {
        setAdvertises([
          ...advertises,
          ...advertiseList
        ] as AdvertiseStatePropsMap[AdvertiseStatePropKey])
      }
    }
  }
}
