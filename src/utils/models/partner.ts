import { Partner } from '@prisma/client'

import { axios } from '@services/axios'
import { formDataToJson } from '@utils/formDataToJson'
import { CreatePartnerFormDataObject } from '~/components/dashboard/Forms/CreatePartnerForm'
import { noEmpty } from '~/utils'

export const createPartnerByFormData = async (
  formData: FormData
): Promise<Partner | null> => {
  try {
    const partnerData =
      await formDataToJson<CreatePartnerFormDataObject>(formData)
    const partner = await createPartner(partnerData)

    return partner
  } catch (err) {}

  return null
}

export const createPartner = async (
  partnerData: CreatePartnerFormDataObject
): Promise<Partner | null> => {
  try {
    const response = await axios.post<Partner>('/company/partners', partnerData)

    const createdPartner = response.data

    if (response.status === 200 && response.data.id) {
      return createdPartner
    }
  } catch (err) {}

  return null
}

export const updatePartnerByFormData = async (
  partnerId: string,
  formData: FormData
): Promise<Partner | null> => {
  const response = await axios.patch<Partner>(
    `/company/partners/${partnerId}`,
    formData
  )

  const createdPartner = response.data

  if (response.status === 200) {
    return createdPartner
  }

  return null
}

export const updatePartner = async (
  partnerId: string,
  partnerData: CreatePartnerFormDataObject
): Promise<Partner | null> => {
  const response = await axios.patch<Partner>(
    `/company/partners/${partnerId}`,
    partnerData
  )

  const createdPartner = response.data

  if (response.status === 200) {
    return createdPartner
  }

  return null
}

export const deletePartnerById = async (
  partnerId: string
): Promise<boolean> => {
  const response = await axios.delete(`/company/partners/${partnerId}`)

  if (response.data) {
    return true
  }

  return false
}

export const deletePartner = async (partner: Partner): Promise<boolean> => {
  return await deletePartnerById(partner.id)
}

export const getPartners = async (
  query: string = ''
): Promise<Array<Partner>> => {
  const response = await axios.get<Array<Partner>>(
    `/company/partners/${noEmpty(query) ? `?${query}` : ''}`
  )

  if (response.data instanceof Array) {
    return response.data
  }

  return []
}
