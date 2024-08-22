import { Service } from '@prisma/client'

import { axios } from '@services/axios'
import { CreateServiceFormDataObject } from '~/components/dashboard/Forms/CreateServiceForm'

import { noEmpty } from '~/utils'

export const createServiceByFormData = async (
  formData: FormData
): Promise<Service | null> => {
  try {
    const response = await axios.post<Service>('/company/services', formData)

    const createdService = response.data

    if (response.status === 200) {
      return createdService
    }
  } catch (err) {}

  return null
}

export const createService = async (
  serviceData: CreateServiceFormDataObject
): Promise<Service | null> => {
  try {
    const response = await axios.post<Service>('/company/services', serviceData)

    const createdService = response.data

    if (response.status === 200 && response.data.id) {
      return createdService
    }
  } catch (err) {}

  return null
}

export const createAdminServiceByFormData = async (
  formData: FormData
): Promise<Service | null> => {
  const response = await axios.post<Service>(
    '/company/services/admins/new',
    formData
  )

  const createdService = response.data

  if (response.status === 200) {
    return createdService
  }

  return null
}

export const updateServiceByFormData = async (
  serviceId: string,
  formData: FormData
): Promise<Service | null> => {
  const response = await axios.patch<Service>(
    `/company/services/${serviceId}`,
    formData
  )

  const createdService = response.data

  if (response.status === 200) {
    return createdService
  }

  return null
}

export const updateService = async (
  serviceId: string,
  serviceData: CreateServiceFormDataObject
): Promise<Service | null> => {
  const response = await axios.patch<Service>(
    `/company/services/${serviceId}`,
    serviceData
  )

  const createdService = response.data

  if (response.status === 200) {
    return createdService
  }

  return null
}

export const deleteServiceById = async (
  serviceId: string
): Promise<boolean> => {
  const response = await axios.delete(`/company/services/${serviceId}`)

  if (response.data) {
    return true
  }

  return false
}

export const deleteService = async (service: Service): Promise<boolean> => {
  return await deleteServiceById(service.id)
}

export const getServices = async (
  query: string = ''
): Promise<Array<Service>> => {
  const response = await axios.get<Array<Service>>(
    `/company/services/${noEmpty(query) ? `?${query}` : ''}`
  )

  if (response.data instanceof Array) {
    return response.data
  }

  return []
}
