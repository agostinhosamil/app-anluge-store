import { Prisma, Service } from '@prisma/client'

import { prisma } from '@services/prisma'

export const getCompanyServices = async (
  args?: Prisma.ServiceFindManyArgs
): Promise<Array<Service>> => {
  try {
    const services = await prisma.service.findMany(args)

    return services
  } catch (err) {
    return []
  }
}
