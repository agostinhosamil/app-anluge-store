import { prisma } from '@services/prisma'
import { CompanyDataProperty } from 'Types/company'

export const getCompanyData = async (
  dataProperty: CompanyDataProperty
): Promise<string | undefined> => {
  const companyDataValue = await prisma.setting.findFirst({
    where: {
      property: dataProperty
    },

    orderBy: {
      id: 'desc'
    },

    select: {
      value: true
    }
  })

  if (companyDataValue) {
    return companyDataValue.value
  }
}
