import { stripStrAccents } from './stripStrAccents'

export const generateSlagByTitle = (title: string): string => {
  title = stripStrAccents(title)

  const re = /(\s+|[^a-zA-Z0-9_\-\.])/

  return title
    .split(re)
    .filter(strSlice => !re.test(strSlice))
    .join('-')
    .split(/[_\-\.]+/)
    .join('-')
    .replace(/^(\s*-+\s*)/, '')
    .replace(/(\s*-+\s*)$/, '')
    .toLowerCase()
    .concat(`-${Math.round(Date.now() * Math.random())}`)
}
