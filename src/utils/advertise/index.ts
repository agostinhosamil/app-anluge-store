import { Advertise, Prisma } from '@prisma/client'

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
