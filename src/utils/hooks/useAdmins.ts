import { useEffect, useState } from 'react'

import { getAdmins } from '@utils/models/admin'
import { UserProps } from 'Types/UserProps'

export const useAdmins = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [admins, setAdmins] = useState<Array<UserProps>>([])

  useEffect(() => {
    const effectHandler = async () => {
      const admins = await getAdmins()

      if (admins instanceof Array && admins.length >= 1) {
        setLoading(false)
        setAdmins(admins)
      }
    }

    effectHandler()
  }, [])

  return {
    admins,
    loading,

    addAdmin(admin: UserProps) {
      setAdmins([...admins, admin])
    },

    updateAdmin(adminId: string, data: Partial<UserProps>) {
      setAdmins(
        admins.map(admin => {
          if (admin.id !== adminId) {
            return admin
          }

          return {
            ...admin,
            ...data
          }
        })
      )
    },

    deleteAdmin(adminId: string) {
      setAdmins(admins.filter(admin => admin.id !== adminId))
    },

    adminExists(adminId: string) {
      return Boolean(admins.find(admin => admin.id === adminId))
    }
  }
}
