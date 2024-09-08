import { prisma } from '@services/prisma'

import { Fragment } from 'react'
import { ServiceListItem } from './ServiceListItem'

export const CompanyServices = async () => {
  const services = await prisma.service.findMany()

  if (services.length <= 1) {
    return null
  }

  return (
    <Fragment>
      {services.map(service => (
        <ServiceListItem key={service.id} service={service} />
      ))}
    </Fragment>
  )
}
