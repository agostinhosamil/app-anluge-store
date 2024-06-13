import { axios } from '@services/axios'
import { AdvertiseProps } from '~/Types/Advertise'
import { noEmpty } from '~/utils'

export const createAdvertiseByFormData = async (
  formData: FormData
): Promise<AdvertiseProps | null> => {
  return await createAdvertise(formData)
}

export const createAdvertise = async (
  advertiseData: any
): Promise<AdvertiseProps | null> => {
  try {
    const response = await axios.post<AdvertiseProps>(
      '/store/advertises',
      advertiseData
    )

    const createdAdvertise = response.data

    if (response.status === 200 && createdAdvertise.id) {
      return createdAdvertise
    }
  } catch (err) {
    // pass
  }

  return null
}

export const updateAdvertiseByFormData = async (
  advertiseId: string,
  formData: FormData
): Promise<AdvertiseProps | null> => {
  try {
    const response = await axios.patch<AdvertiseProps>(
      `/store/advertises/${advertiseId}`,
      formData
    )

    const createdAdvertise = response.data

    if (response.status === 200 && createdAdvertise.id) {
      return createdAdvertise
    }
  } catch (err) {
    // pass
  }

  return null
}

export const deleteAdvertiseById = async (
  advertiseId: string
): Promise<boolean> => {
  try {
    const response = await axios.delete(`/store/advertises/${advertiseId}`)

    if (response.data && response.data.success) {
      return true
    }
  } catch (err) {
    // pass
  }

  return false
}

export const deleteAdvertise = async (
  advertise: AdvertiseProps
): Promise<boolean> => {
  return await deleteAdvertiseById(advertise.id)
}

export const getAdvertises = async (
  query?: string
): Promise<Array<AdvertiseProps>> => {
  try {
    const response = await axios.get<Array<AdvertiseProps>>(
      '/store/advertises'.concat(
        noEmpty(query) ? `?${query.replace(/\?\s*/, '')}` : ''
      )
    )

    if (response.data instanceof Array) {
      return response.data
    }
  } catch (err) {
    // pass
  }

  return []
}
