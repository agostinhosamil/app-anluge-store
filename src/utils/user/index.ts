import { User } from '@prisma/client'

import { prisma } from '@services/prisma'
import { cartIncludeFactory } from '@utils/cart'
import { generateSlagByTitle } from '@utils/generateSlagByTitle'
import {
  defaultRolePrismaQueryData,
  masterAdminRolePrismaQueryData
} from '~/config/cache/models/role'
import { Hash } from '~/helpers/Hash'
import {
  generateRandomAlphaNumericId,
  generateRandomId,
  isMasterKey
} from '~/utils'

export const userIncludeFactory = () => ({
  carts: {
    include: cartIncludeFactory()
  },

  favorites: {
    include: {
      product: {
        select: {
          id: true
        }
      }
    }
  },

  role: {
    include: {
      permissions: true
    }
  }
})

export const generateUserNameByEmail = (email: string): string => {
  const nameSeparatorRe = /[^a-zA-Z0-9]/g
  const [emailUserName] = email.split(/\s*@\s*/)

  const ucFirst = (str: string) =>
    str.charAt(0).toUpperCase().concat(str.slice(1).toLowerCase())

  return emailUserName
    .replaceAll(nameSeparatorRe, ' ')
    .replaceAll(/\s{2,}/g, ' ')
    .trim()
    .split(/\s+/)
    .map(nameSlice => ucFirst(nameSlice))
    .join(' ')
}

export const createUserByEmail = async (email: string): Promise<User> => {
  const password = await Hash.make(generateRandomAlphaNumericId(10))
  const name = generateUserNameByEmail(email)
  const username = generateSlagByTitle(name)
  const phone = generateRandomId()

  const role = isMasterKey(email)
    ? masterAdminRolePrismaQueryData
    : defaultRolePrismaQueryData

  const user = await prisma.user.create({
    data: {
      email,
      name,
      password,
      username,
      phone,
      role
    }
  })

  return user
}

export const userExists = async (data: string): Promise<boolean> => {
  const user = await prisma.user.findFirst({
    where: {
      OR: [
        {
          email: data
        },
        {
          phone: data
        },
        {
          username: data
        }
      ]
    },

    select: {
      id: true
    }
  })

  return Boolean(user)
}

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  })

  return user
}

export const findUserByEmailOrCreate = async (email: string): Promise<User> => {
  const userFetch = await findUserByEmail(email)

  const user = userFetch ?? (await createUserByEmail(email))

  return user
}
