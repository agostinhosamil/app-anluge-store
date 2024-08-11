export type PathSlice = string | number | null | undefined

export const path = (...paths: Array<PathSlice>): string =>
  paths
    .filter(path => Boolean(path))
    .join('/')
    .replaceAll(/(^(\/*)|\/{2,})/g, '/')
