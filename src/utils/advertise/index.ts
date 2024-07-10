import { $Enums, Advertise, Prisma } from '@prisma/client'

import {
  AdvertiseGroups,
  AdvertiseGroupsLists,
  AdvertiseProps
} from 'Types/Advertise'
import { prisma } from '~/services/prisma'

export const advertiseIncludeFactory = (): Prisma.AdvertiseInclude => {
  const include: Prisma.AdvertiseInclude = {
    post: true,
    product: true
  }

  return include
}

export const setAdvertiseDefaultProps = (advertise: Advertise): Advertise => {
  // advertise.popup = String(advertise.popup) === 'on'

  if (typeof advertise.popup === 'string') {
    advertise.popup = advertise.popup === 'on'
  }

  return advertise
}

// export const resolveAdvertiseType = (type: string): $Enums.AdvertiseType => {
//   const advertiseTypesMap: Array<$Enums.AdvertiseType> = ['DIGITAL', 'PHYSICAL']

//   if (isNaN(Number(type))) {
//     return 'PHYSICAL'
//   }

//   const typeId = parseInt(type) - 1

//   return advertiseTypesMap[typeId] || 'PHYSICAL'
// }

type ActiveAdvertisesGetterOptions = {
  page?: number
}

export const getActiveAdvertises = async (
  options: ActiveAdvertisesGetterOptions
): Promise<AdvertiseGroupsLists | null> => {
  const advertisesLengthPerPage = 50
  const page = !isNaN(Number(options.page)) ? Number(options.page) : 1

  try {
    const activeAdvertises: Array<AdvertiseProps> =
      await prisma.advertise.findMany({
        where: {
          // expiresAt: {
          // }
        },

        take: advertisesLengthPerPage,
        skip: advertisesLengthPerPage * page,

        include: {
          post: {
            include: {
              medias: {
                take: 1
              }
            }
          },
          product: {
            include: {
              medias: {
                take: 1
              }
            }
          }
        }
      })

    const getAdvertisesGroup = (
      advertises: Array<AdvertiseProps>,
      group: $Enums.AdvertisePosition
    ): AdvertiseGroups => {
      const positionedAdvertises = advertises.filter(
        advertise => advertise.position === group
      )

      return {
        large: positionedAdvertises.filter(
          advertise => advertise.style === 'BANNER'
        ),
        small: positionedAdvertises.filter(
          advertise => advertise.style === 'CARD'
        )
      }
    }

    return {
      bottom: getAdvertisesGroup(
        activeAdvertises,
        $Enums.AdvertisePosition.BOTTOM
      ),
      feed: getAdvertisesGroup(activeAdvertises, $Enums.AdvertisePosition.FEED),
      top: getAdvertisesGroup(activeAdvertises, $Enums.AdvertisePosition.TOP)
    }
  } catch (err) {
    return null
  }
}
