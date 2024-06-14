import companyData from '~/config/cache/company-data/index.json'

export const orderLinkFactory = (message: string) =>
  `https://api.whatsapp.com/send/?phone=${encodeURIComponent(companyData.socialMediaWhatsapp)}&text=${message}&type=phone_number&app_absent=0`
