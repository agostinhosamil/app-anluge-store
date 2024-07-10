import { useEffect, useState } from 'react'

import { getAdvertises } from '@utils/models/advertise'
import { AdvertiseProps } from '~/Types/Advertise'

export type UseAdvertiseHookDataObject = {
  advertises: Array<AdvertiseProps>
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

export const useAdvertise = (): UseAdvertiseHookDataObject => {
  const [loading, setLoading] = useState<boolean>(true)
  const [advertises, setAdvertises] = useState<Array<AdvertiseProps>>([])

  useEffect(() => {
    const handleEffect = async () => {
      const registeredAdvertises = await getAdvertises()

      setAdvertises(registeredAdvertises)
      setLoading(false)
    }

    handleEffect()
  }, [])

  return {
    advertises,
    loading,

    addAdvertise(advertise) {
      const currentAdvertises = advertises instanceof Array ? advertises : []
      setAdvertises([...currentAdvertises, advertise])
    },

    removeAdvertise(advertiseId) {
      if (!(advertises instanceof Array)) {
        return
      }

      setAdvertises(
        advertises.filter(advertise => advertise.id !== advertiseId)
      )
    },

    updateAdvertise(advertiseId, advertiseData) {
      if (!(advertises instanceof Array)) {
        return
      }

      setAdvertises(
        advertises.map(advertise => {
          if (advertise.id !== advertiseId) {
            return advertise
          }

          return {
            ...advertise,
            ...advertiseData
          }
        })
      )
    },

    setAdvertises(advertiseList) {
      setAdvertises(advertiseList)
    },

    addAdvertises(advertiseList) {
      setAdvertises([...advertises, ...advertiseList])
    }
  }
}
