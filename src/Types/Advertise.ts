import { Prisma } from '@prisma/client'

export type AdvertiseProps = Prisma.AdvertiseGetPayload<{
  include: {
    post: {
      include: {
        medias: {
          take: 1
        }
      }
    }
    product: {
      include: {
        medias: {
          take: 1
        }
      }
    }
  }
}>

export type AdvertiseGroups = {
  large: Array<AdvertiseProps>
  small: Array<AdvertiseProps>
}

export type AdvertiseGroupsLists = {
  top: AdvertiseGroups
  feed: AdvertiseGroups
  bottom: AdvertiseGroups
}
