import { useEffect, useState } from 'react'

import { getRoles, loadDefaultRoles } from '@utils/models/role'
import { RoleProps } from '~/Types/Role'

export type UseRoleHookDataObject = {
  roles: Array<RoleProps>
  loading: boolean
  loadDefaultRoles: () => Promise<Array<RoleProps>>
  addRole: (role: RoleProps) => void
  addRoles: (roleList: Array<RoleProps>) => void
  setRoles: (roleList: Array<RoleProps>) => void
  removeRole: (roleId: number) => void
  updateRole: (roleId: number, roleData: Partial<RoleProps>) => void
}

export const useRole = (): UseRoleHookDataObject => {
  const [loading, setLoading] = useState<boolean>(true)
  const [roles, setRoles] = useState<Array<RoleProps>>([])

  useEffect(() => {
    const handleEffect = async () => {
      // const response = await axios.get<Array<RoleProps>>('/roles')

      // if (response.data instanceof Array) {

      // }

      const registeredRoles = await getRoles()

      setRoles(registeredRoles)
      setLoading(false)
    }

    handleEffect()
  }, [])

  return {
    roles,
    loading,

    addRole(role) {
      const currentRoles = roles instanceof Array ? roles : []
      setRoles([...currentRoles, role])
    },

    removeRole(roleId) {
      if (!(roles instanceof Array)) {
        return
      }

      setRoles(roles.filter(role => role.id !== roleId))
    },

    updateRole(roleId, roleData) {
      if (!(roles instanceof Array)) {
        return
      }

      setRoles(
        roles.map(role => {
          if (role.id !== roleId) {
            return role
          }

          return {
            ...role,
            ...roleData
          }
        })
      )
    },

    setRoles(roleList) {
      setRoles(roleList)
    },

    addRoles(roleList) {
      setRoles([...roles, ...roleList])
    },

    async loadDefaultRoles() {
      setLoading(true)

      await loadDefaultRoles()

      const allUpdatedRoles = await getRoles()

      setRoles(allUpdatedRoles)

      setLoading(false)

      return allUpdatedRoles
    }
  }
}
