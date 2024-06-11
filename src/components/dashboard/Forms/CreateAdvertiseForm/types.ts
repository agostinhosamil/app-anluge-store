export type AdvertiseSourceType = 'post' | 'product' | 'link'

export type AdvertiseSource = {
  type: AdvertiseSourceType
  label: string
  ref?: string
}
