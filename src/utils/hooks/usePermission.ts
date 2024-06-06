import { useEffect, useState } from 'react'

import { axios } from '@services/axios'
import { PermissionProps } from 'Types/Permission'

export type UsePermissionHookDataObject = {
  permissions?: Array<PermissionProps>
  addPermission: (permission: PermissionProps) => void
  removePermission: (permissionId: number) => void
  updatePermission: (
    permissionId: number,
    permissionData: Partial<PermissionProps>
  ) => void
}

export const usePermission = (): UsePermissionHookDataObject => {
  const [permissions, setPermissions] = useState<Array<PermissionProps>>()

  useEffect(() => {
    const handleEffect = async () => {
      const response = await axios.get<Array<PermissionProps>>('/permissions')

      if (response.data instanceof Array) {
        setPermissions(response.data)
      }
    }

    handleEffect()
  }, [])

  return {
    permissions,

    addPermission(permission) {
      const currentPermissions = permissions instanceof Array ? permissions : []
      setPermissions([...currentPermissions, permission])
    },

    removePermission(permissionId) {
      if (!(permissions instanceof Array)) {
        return
      }

      setPermissions(
        permissions.filter(permission => permission.id !== permissionId)
      )
    },

    updatePermission(permissionId, permissionData) {
      if (!(permissions instanceof Array)) {
        return
      }

      setPermissions(
        permissions.map(permission => {
          if (permission.id !== permissionId) {
            return permission
          }

          return {
            ...permission,
            ...permissionData
          }
        })
      )
    }
  }
}
