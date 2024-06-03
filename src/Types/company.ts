import { z } from 'zod'

export const companyDataObjectMap = {
  name: z.string({}),
  taxName: z.string(),
  address: z.string(),
  description: z.string(),
  phoneNumber: z.string(),
  emailAddress: z.string(),
  mainPhoneNumber: z.string(),
  mainEmailAddress: z.string(),
  daysIntervalOpen: z.string(),
  shortDescription: z.string(),
  hoursIntervalOpen: z.string(),
  'socialMedia:facebook': z.string(),
  'socialMedia:twitter': z.string(),
  'socialMedia:instagram': z.string(),
  'socialMedia:whatsapp': z.string()
}

export const companyDataObject = z.object(companyDataObjectMap)

export type CompanyData = Partial<z.infer<typeof companyDataObject>>

export type CompanyDataProperty = keyof CompanyData
