import {
  AdvertiseGroups,
  AdvertiseGroupsLists,
  AdvertisePosition,
  AdvertiseProps,
  AdvertiseSize
} from '~/Types/Advertise'

export type AdvertiseContextData = {
  advertises: AdvertiseGroupsLists

  getAdvertises: (position?: AdvertisePosition) => Promise<AdvertiseGroupsLists>

  getTopAdvertises: (
    size?: AdvertiseSize
  ) => Promise<AdvertiseGroups | Array<AdvertiseProps>>
  getFeedAdvertises: (
    size?: AdvertiseSize
  ) => Promise<AdvertiseGroups | Array<AdvertiseProps>>
  getBottomAdvertises: (
    size?: AdvertiseSize
  ) => Promise<AdvertiseGroups | Array<AdvertiseProps>>
}
