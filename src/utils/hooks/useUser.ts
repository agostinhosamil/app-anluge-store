import { useEffect, useState } from 'react'

import { getUsers } from '@utils/models/user'
import { UserProps } from 'Types/UserProps'

export const useUser = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [users, setUsers] = useState<Array<UserProps>>([])

  useEffect(() => {
    const effectHandler = async () => {
      const users = await getUsers()

      if (users instanceof Array && users.length >= 1) {
        setLoading(false)
        setUsers(users)
      }
    }

    effectHandler()
  }, [])

  return {
    users,
    loading,

    addUser(user: UserProps) {
      setUsers([...users, user])
    },

    updateUser(userId: string, data: Partial<UserProps>) {
      setUsers(
        users.map(user => {
          if (user.id !== userId) {
            return user
          }

          return {
            ...user,
            ...data
          }
        })
      )
    },

    deleteUser(userId: string) {
      setUsers(users.filter(user => user.id !== userId))
    }
  }
}
