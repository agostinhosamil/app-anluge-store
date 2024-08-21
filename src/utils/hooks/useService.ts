import { Service } from '@prisma/client'
import { useEffect, useState } from 'react'

import { getServices } from '@utils/models/service'

export const useService = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [services, setServices] = useState<Array<Service>>([])

  useEffect(() => {
    const effectHandler = async () => {
      const services = await getServices()

      if (services instanceof Array && services.length >= 1) {
        setServices(services)
      }

      setLoading(false)
    }

    effectHandler()
  }, [])

  return {
    services,
    loading,

    addService(service: Service) {
      setServices([...services, service])
    },

    updateService(serviceId: string, data: Partial<Service>) {
      setServices(
        services.map(service => {
          if (service.id !== serviceId) {
            return service
          }

          return {
            ...service,
            ...data
          }
        })
      )
    },

    deleteService(serviceId: string) {
      setServices(services.filter(service => service.id !== serviceId))
    }
  }
}
