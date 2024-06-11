export type AppModuleKey = 'store' | 'blog' | 'institution' | 'partners'

export type AppModuleLink = {
  key: AppModuleKey
  label: string
  link: string
}
