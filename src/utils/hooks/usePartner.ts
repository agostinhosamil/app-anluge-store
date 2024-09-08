import { Partner } from '@prisma/client'
import { useEffect, useState } from 'react'

import { getPartners } from '@utils/models/partner'

export const usePartner = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [partners, setPartners] = useState<Array<Partner>>([])

  useEffect(() => {
    const effectHandler = async () => {
      const partners = await getPartners()

      if (partners instanceof Array && partners.length >= 1) {
        setPartners(partners)
      }

      setLoading(false)
    }

    effectHandler()
  }, [])

  return {
    partners,
    loading,

    addPartner(partner: Partner) {
      setPartners([...partners, partner])
    },

    updatePartner(partnerId: string, data: Partial<Partner>) {
      setPartners(
        partners.map(partner => {
          if (partner.id !== partnerId) {
            return partner
          }

          return {
            ...partner,
            ...data
          }
        })
      )
    },

    deletePartner(partnerId: string) {
      setPartners(partners.filter(partner => partner.id !== partnerId))
    }
  }
}
